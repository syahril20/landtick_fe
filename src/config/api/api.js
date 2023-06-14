import axios from "axios";

export const API = axios.create({
    baseURL : "https://landtick-production.up.railway.app/api/v1"
})