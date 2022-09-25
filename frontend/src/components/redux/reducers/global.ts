import { toast } from 'react-toastify';
import {
    INITIAL_LOAD_SUCCESS, INITIAL_LOAD_FAIL
} from '../global/actions/types';

// Initial State (...state)
const initialState = {
    data: null,
};

const globalReducer = (state = initialState, action:any) => {
    // Init
    const { type, message, payload } = action;

    switch(type) {
        // Load
        case INITIAL_LOAD_SUCCESS:
            return {
                ...state,
                data: payload
            }
        case INITIAL_LOAD_FAIL:
            toast.error(message);
            return {
                ...state,
                data: null
            }

        // Default
        default:
            return state;
    };
};

export default globalReducer;