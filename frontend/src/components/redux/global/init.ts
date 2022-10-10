import { BACKEND_URL } from '../../config'
import { FETCH_FAIL } from '../messages'
import {
    INITIAL_LOAD_SUCCESS, INITIAL_LOAD_FAIL
} from './types'

// Load User
export const initial_load = () => async (dispatch:any) => {
    // Trigger
    try {
        // Fetch
        const res = await fetch(`${BACKEND_URL}`, {
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
                type: INITIAL_LOAD_SUCCESS,
                payload: data
            })
            return res.status
        } else {
            dispatch({
                type: INITIAL_LOAD_FAIL,
                message: data.detail
            })
        }
    } catch(err) {
        // Catch Error
        dispatch({
            type: INITIAL_LOAD_FAIL,
            message: FETCH_FAIL
        })
    }
}