import { combineReducers } from "redux";

import productsReducer from './product_reducer';

const rootReducer = combineReducers({
    productsReducer
})

export default rootReducer;