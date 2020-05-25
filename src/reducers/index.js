import { combineReducers } from "redux";

import productsReducer from './product_reducer';
import cartReducer from './cart_reducer';
import loginReducer from './login_reducer';
import {reducer as toastrReducer } from 'react-redux-toastr';

const rootReducer = combineReducers({
    productsReducer,
    cartReducer,
    loginReducer,
    toastr: toastrReducer
})

export default rootReducer;