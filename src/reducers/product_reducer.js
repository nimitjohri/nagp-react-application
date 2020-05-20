import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCT_BY_ID } from '../actions/productAction';

const INITIAL_STATE = {
    payload: {},
    loading: false
}

function productsReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            console.log('reducer 1')
            return {
                ...state,
                payload: action.products,
                loading: false
            }
        case FETCH_PRODUCT_BY_ID:
            console.log('reducer 2')
            return {
                ...state,
                payload: action.product,
                loading: false
            }
        default: 
            return state;
    }
}

export default productsReducer;