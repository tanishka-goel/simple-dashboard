import axios from "axios";

const BaseApi = axios.create({
    baseURL:import.meta.env.VITE_API_BASE_URL
})

export default BaseApi