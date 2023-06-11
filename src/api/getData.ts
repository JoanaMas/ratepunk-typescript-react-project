export const getData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    return response.json();
};