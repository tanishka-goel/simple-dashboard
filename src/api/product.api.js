import axios from "axios";

export async function getProducts(){
    const response = await axios.get("https://dummyjson.com/products")
    console.log("products api data : ", response.data)
    return response.data.products
} 