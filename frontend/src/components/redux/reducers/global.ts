import {
    INITIAL_LOAD_SUCCESS, INITIAL_LOAD_FAIL
} from '../global/types'

// Initial State (...state)
const initialState = {
    data: null,
}

const Main = (state = initialState, action:any) => {
    // Init
    const { type, message, payload } = action

    switch(type) {
        // Load
        case INITIAL_LOAD_SUCCESS:
            return {
                ...state,
                data: payload
            }
        case INITIAL_LOAD_FAIL:
            return {
                ...state,
                data: null
            }

        // Default
        default:
            return state
    }
}

export default Main