import { combineReducers } from "redux";

import productsReducer from './product_reducer';
import cartReducer from './cart_reducer';

const rootReducer = combineReducers({
    productsReducer,
    cartReducer,
})

export default rootReducer;