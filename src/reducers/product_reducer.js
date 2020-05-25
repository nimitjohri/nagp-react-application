import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCT_BY_ID, FETCH_PRODUCTS_ON_SEARCH } from '../actions/productAction';

const INITIAL_STATE = {
    payload: {},
    searchPayload: {},
    searchProducts:[],
    loading: false,
    showSearchProducts: false,
}

function productsReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                payload: action.products,
                loading: false,
            }
        case FETCH_PRODUCT_BY_ID:
            return {
                ...state,
                payload: action.product,
                loading: false,
            }
        case FETCH_PRODUCTS_ON_SEARCH:
            return {
                ...state,
                searchProducts: action.searchProducts,
                loading: false,
                showSearchProducts: true
            }
        default: 
            return state;
    }
}

export default productsReducer;