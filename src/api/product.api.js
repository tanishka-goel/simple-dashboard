import BaseApi from "./base.api";

export async function getProducts(){
    const response = await BaseApi.get("products")
    return response.data.products
} 