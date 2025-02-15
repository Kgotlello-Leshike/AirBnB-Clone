import {OPEN_MODAL} from '../types/modalTypes'
const initialState = {openClose: "closed", content: ""};

export const modalReducer = (state = initialState, action) => {
    if(action.typr === OPEN_MODAL) {
        return action.payload; 
    }
    return state;
};