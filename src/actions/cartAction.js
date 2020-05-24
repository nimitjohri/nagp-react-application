export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
export const SUB_QUANTITY = 'SUB_QUANTITY';
export const ADD_QUANTITY = 'ADD_QUANTITY';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const addItemToCart = (isLoggedIn, id, product) => 
    (dispatch, getState) => {
        dispatch({
            type: ADD_ITEM_TO_CART,
            isLoggedIn: isLoggedIn,
            id: id ,
            product: product   
        })
    }

export const subtractQuantity = (id) => 
    (dispatch, getState) => {
        dispatch({
            type: SUB_QUANTITY,
            id: id,
        })
}

export const addQuantity = (id) => 
    (dispatch, getState) => {
    dispatch({
        type: ADD_QUANTITY,
        id: id,
    })
}

export const removeItem = (id) => 
    (dispatch, getState) => {
        dispatch({
            type: REMOVE_ITEM,
            id: id,
    })    
}

export default addItemToCart;
