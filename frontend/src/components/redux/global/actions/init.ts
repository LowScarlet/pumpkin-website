import {
    INITIAL_LOAD_SUCCESS, INITIAL_LOAD_FAIL
} from './types'

// Error Message Catch Error
const error_message = "There was a problem communicating with the API server! Contact the staff for consultation on this matter"

// Load User
export const initial_load = () => async (dispatch:any) => {
    // Trigger
    try {
        // Fetch
        const res = await fetch('/api/', {
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
                type: INITIAL_LOAD_SUCCESS,
                payload: data.data
            });
        } else {
            dispatch({
                type: INITIAL_LOAD_FAIL,
                message: data.detail
            });
        }
    } catch(err) {
        // Catch Error
        dispatch({
            type: INITIAL_LOAD_FAIL,
            message: error_message
        });
    }
};