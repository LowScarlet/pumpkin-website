import {
    AUTHENTICATED_FAIL, AUTHENTICATED_SUCCESS, LOAD_USER_FAIL, LOAD_USER_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_SUCCESS, REFRESH_FAIL, REFRESH_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS, REMOVE_AUTH_LOADING, RESET_REGISTER_SUCCESS, SET_AUTH_LOADING
} from './types';

// Error Message Catch Error
const error_message = "There was a problem communicating with the API server! Contact the staff for consultation on this matter"

// Load User
export const load_user = () => async (dispatch:any) => {
    // Trigger
    try {
        // Fetch
        const res = await fetch('/api/account/user', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        // Get response as Json 
        const data = await res.json();

        // Validation
        if (res.status === 200) {
            dispatch({
                type: LOAD_USER_SUCCESS,
                payload: data
            });
        } else {
            dispatch({
                type: LOAD_USER_FAIL,
                message: data.detail
            });
        }
    } catch(err) {
        // Catch Error
        dispatch({
            type: LOAD_USER_FAIL,
            message: error_message
        });
    }
};

// Check Auth Status
export const check_auth_status = () => async (dispatch:any) => {
    // Trigger
    try {
        // Fetch
        const res = await fetch('/api/account/verify', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        });

        // Validation
        if (res.status === 200) {
            dispatch({
                type: AUTHENTICATED_SUCCESS
            });
            dispatch(load_user());
        } else {
            dispatch({
                type: AUTHENTICATED_FAIL
            });
        }
    } catch(err) {
        // Catch Error
        dispatch({
            type: AUTHENTICATED_FAIL
        });
    }
};

// Request Refresh
export const request_refresh = () => async (dispatch:any)  => {
    // Trigger
    try {
        // Fetch
        const res = await fetch('/api/account/refresh', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        });

        // Validation
        if (res.status === 200) {
            dispatch({
                type: REFRESH_SUCCESS
            });
            dispatch(check_auth_status());
        } else {
            dispatch({
                type: REFRESH_FAIL
            });
        }
    } catch(err) {
        // Catch Error
        dispatch({
            type: REFRESH_FAIL
        });
    }
};

// Register
export const register = (first_name:any, last_name:any, username:any, email:any, password:any, re_password:any) => async (dispatch:any)  => {
    // Init
    const body = JSON.stringify({
        first_name,
        last_name,
        username,
        email,
        password,
        re_password
    });

    // Set Loader
    dispatch({
        type: SET_AUTH_LOADING
    });

    // Trigger
    try {
        // Fetch
        const res = await fetch('/api/account/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: body
        })

        // Get response as Json
        const data = await res.json()

        // validation
        if (res.status === 201) {
            dispatch({
                type: REGISTER_SUCCESS,
                message: data.detail
            });
        } else {
            dispatch({
                type: REGISTER_FAIL,
                message: data.detail
            });
        }
    } catch(err) {
        // Catch Error
        dispatch({
            type: REGISTER_FAIL,
            message: error_message
        });
    }

    // Remove Loader
    dispatch({
        type: REMOVE_AUTH_LOADING
    });
};
export const reset_register_success = () => (dispatch:any) => {
    // Trigger
    dispatch({
        type: RESET_REGISTER_SUCCESS
    });
};

// Login
export const login = (username:any, password:any) => async (dispatch:any)  => {
    // Init
    const body = JSON.stringify({
        username,
        password
    });

    // Set Loader
    dispatch({
        type: SET_AUTH_LOADING
    });

    // Trigger
    try {
        // Fetch
        const res = await fetch('/api/account/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: body
        });

        // Get response as Json
        const data = await res.json()

        // Validation
        if (res.status === 200) {
            dispatch({
                type: LOGIN_SUCCESS,
                message: data.detail
            });
            dispatch(
                load_user()
            );
        } else {
            dispatch({
                type: LOGIN_FAIL,
                message: data.detail
            });
        }
    } catch(err) {
        // Catch Error
        dispatch({
            type: LOGIN_FAIL,
            message: error_message
        });
    }

    // Remove Loader
    dispatch({
        type: REMOVE_AUTH_LOADING
    });
};

// Logout
export const logout = () => async (dispatch:any)  => {
    // Trigger
    try {
        // Fetch
        const res = await fetch('/api/account/logout', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            }
        });

        // Get response as Json
        const data = await res.json()

        // Validation
        if (res.status === 200) {
            dispatch({
                type: LOGOUT_SUCCESS,
                message: data.detail
            });
        } else {
            dispatch({
                type: LOGOUT_FAIL,
                message: data.detail
            });
        }
    } catch(err) {
        // Catch Error
        dispatch({
            type: LOGOUT_FAIL,
            message: error_message
        });
    }
};