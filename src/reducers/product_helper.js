
export const getProducts = () => {
    console.log('im being caled')
    let products
    fetch("http://localhost:3100/phones")
    .then((res) => res.json())
    .then((data) => {
        products = data
    });
    return products;
}