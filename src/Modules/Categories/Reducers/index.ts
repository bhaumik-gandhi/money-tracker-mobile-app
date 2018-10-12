import { GET_CATEGORIES } from '../Types';

const INITIAL_STATE = {
    categories: []
}

export default ( state = INITIAL_STATE, action: any ) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return { ...state, categories: action.payload }
        default:
            return state
    }
}