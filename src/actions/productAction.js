export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCT_BY_ID = 'FETCH_PRODUCT_BY_ID';

const fetchProducts = () => 
    (dispatch, getState) => {
        console.log("GetProducts dispatch");
        fetch("http://localhost:3001/phones")
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type: FETCH_PRODUCTS_SUCCESS,
                products: data
            });
        });
    }

export const fetchProductById = (id) => 
    (dispatch, getState) => {
        console.log("GetProductById dispatch");
        fetch(`http://localhost:3001/phones/?id=${id}`)
        .then(res => res.json())
        .then((data) => {
            dispatch({
                type: FETCH_PRODUCT_BY_ID,
                product: data
            });
        });
    }

export default () => {
   return { fetchProducts, fetchProductById } 
}