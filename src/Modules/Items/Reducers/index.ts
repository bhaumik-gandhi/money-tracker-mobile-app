import { GET_ITEMS } from '../Types';

const INITIAL_STATE = {
    items: []
}

export default ( state = INITIAL_STATE, action: any ) => {
    switch (action.type) {
        case GET_ITEMS:
            return { ...state, items: action.payload }
        default:
            return state
    }
}