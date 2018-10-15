import { combineReducers } from 'redux';

// Import Reducers
import items from '../Modules/Items/Reducers';
import categories from '../Modules/Categories/Reducers';

export default combineReducers({
    items,
    categories
});