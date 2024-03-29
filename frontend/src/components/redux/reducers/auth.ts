import { toast } from 'react-toastify'
import {
    AUTHENTICATED_FAIL, AUTHENTICATED_SUCCESS, LOAD_USER_FAIL, LOAD_USER_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_SUCCESS, REFRESH_FAIL, REFRESH_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS, REMOVE_AUTH_LOADING, RESET_REGISTER_SUCCESS, SET_AUTH_LOADING
} from '../authentication/types'

// Initial State (...state)
const initialState = {
    user: null,
    isAuthenticated: null,
    loading: false,
    register_success: false,
}

const Main = (state = initialState, action:any) => {
    // Init
    const { type, message, payload } = action

    switch(type) {
        // Register
        case REGISTER_SUCCESS:
            return {
                ...state,
                register_success: true
            }
        case REGISTER_FAIL:
            return {
                ...state,
                register_success: false
            }
        case RESET_REGISTER_SUCCESS:
            return {
                ...state,
                register_success: false
            }

        // Login
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }
        case LOGIN_FAIL:
            return {
                ...state,
                isAuthenticated: false
            }
            
        // Logout
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                user: null
            }
        case LOGOUT_FAIL:
            return {
                ...state,
                message: message
            }
        
        // Load User
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                user: payload
            }
        case LOAD_USER_FAIL:
            return {
                ...state,
                user: null
            }

        // Authenticated
        case AUTHENTICATED_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }
        case AUTHENTICATED_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                user: null
            }

        // Refresh
        case REFRESH_SUCCESS:
            return {
                ...state,
            }
        case REFRESH_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                user: null
            }

        // Loader
        case SET_AUTH_LOADING:
            return {
                ...state,
                loading: true
            }
        case REMOVE_AUTH_LOADING:
            return {
                ...state,
                loading: false
            }

        // Default
        default:
            return state
    }
}

export default Main