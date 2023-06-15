import axios from "axios";

export const API = axios.create({
    baseURL : "https://landtick-production.up.railway.app/api/v1"
})
export const API_KERETA = axios.create({
    baseURL : "https://booking.kai.id/api/stations2"
})