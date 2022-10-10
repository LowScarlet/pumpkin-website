import { FETCH_FAIL } from '../messages'
import {
    AUTHENTICATED_FAIL, AUTHENTICATED_SUCCESS, LOAD_USER_FAIL, LOAD_USER_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_SUCCESS, REFRESH_FAIL, REFRESH_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS
} from './types'

// Load User
export const load_user = () => async (dispatch:any) => {
    // Trigger
    try {
        // Fetch
        const res = await fetch('/api/account', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })

        // Get response as Json 
        const data = await res.json()

        // Validation
        if (res.status === 200) {
            dispatch({
                type: LOAD_USER_SUCCESS,
                payload: data
            })
        } else {
            dispatch({
                type: LOAD_USER_FAIL,
                message: data.detail
            })
        }
    } catch {
        // Catch Error
        dispatch({
            type: LOAD_USER_FAIL,
            message: FETCH_FAIL
        })
    }
}

// Check Auth Status
export const check_auth_status = () => async (dispatch:any) => {
    // Trigger
    try {
        // Fetch
        const res = await fetch('/api/auth/verify', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        })

        // Validation
        if (res.status === 200) {
            dispatch({
                type: AUTHENTICATED_SUCCESS
            })
            dispatch(load_user())
        } else {
            dispatch({
                type: AUTHENTICATED_FAIL
            })
        }
    } catch {
        // Catch Error
        dispatch({
            type: AUTHENTICATED_FAIL
        })
    }
}

// Request Refresh
export const request_refresh = () => async (dispatch:any)  => {
    // Trigger
    try {
        // Fetch
        const res = await fetch('/api/auth/refresh', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        })

        // Validation
        if (res.status === 200) {
            dispatch({
                type: REFRESH_SUCCESS
            })
            dispatch(check_auth_status())
        } else {
            dispatch({
                type: REFRESH_FAIL
            })
        }
    } catch {
        dispatch({
            type: REFRESH_FAIL
        })
    }
}

// Register
export const register = (status:any, data:any) => async (dispatch:any)  => {
    // validation
    if (status === 201) {
        dispatch({
            type: REGISTER_SUCCESS,
            message: data.detail
        })
    } else {
        dispatch({
            type: REGISTER_FAIL,
            message: data.detail
        })
    }
}

// Login
export const login = (status:any, data:any) => async (dispatch:any)  => {
    // Validation
    if (status === 200) {
        dispatch({
            type: LOGIN_SUCCESS,
            message: data.detail
        })
        dispatch(
            load_user()
        )
    } else {
        dispatch({
            type: LOGIN_FAIL,
            message: data.detail
        })
    }
}

// Logout
export const logout = (status:any, data:any) => async (dispatch:any)  => {
    // Validation
    if (status === 200) {
        dispatch({
            type: LOGOUT_SUCCESS,
            message: data.detail
        })
    } else {
        dispatch({
            type: LOGOUT_FAIL,
            message: data.detail
        })
    }
}