export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCT_BY_ID = 'FETCH_PRODUCT_BY_ID';
export const FETCH_PRODUCTS_ON_SEARCH = 'FETCH_PRODUCTS_ON_SEARCH';

export const fetchProducts = () => 
    (dispatch, getState) => {
        console.log("GetProducts dispatch");
        fetch("http://localhost:3100/phones")
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
        fetch(`http://localhost:3100/phones?id=${id}`)
        .then(res => res.json())
        .then((data) => {
            dispatch({
                type: FETCH_PRODUCT_BY_ID,
                product: data
            });
        });
    }

export const fetchProductsOnSearch = (query) =>
    (dispatch, getState) => {
        console.log("Get Products on the basis of search", query)
        if (query !== ""){
            fetch(`http://localhost:3100/phones?q=${query}`)
            .then(res => res.json())
            .then((data) => {
                dispatch({
                    type: FETCH_PRODUCTS_ON_SEARCH,
                    searchProducts: data
                });
            });    
        } else if (query === "") {
            dispatch({
                type: FETCH_PRODUCTS_ON_SEARCH,
                searchProducts: []
            })
        }
    }

export default () => {
   return { fetchProducts, fetchProductById } 
}