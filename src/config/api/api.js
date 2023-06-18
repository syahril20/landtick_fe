import axios from "axios";

export const API = axios.create({
    baseURL : process.env.REACT_APP_BASE_URL
})
export const API_KERETA = axios.create({
    baseURL : "https://booking.kai.id/api/stations2"
})