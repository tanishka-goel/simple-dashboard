import axios from "axios";
import BaseApi from "./base.api";

export async function getProducts(){
    const response = await BaseApi.get("products")
    console.log("products api data : ", response.data)
    return response.data.products
} 