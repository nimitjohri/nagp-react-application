import { combineReducers } from "redux";

import productsReducer from './product_reducer';
import cartReducer from './cart_reducer';
import loginReducer from './login_reducer';

const rootReducer = combineReducers({
    productsReducer,
    cartReducer,
    loginReducer
})

export default rootReducer;