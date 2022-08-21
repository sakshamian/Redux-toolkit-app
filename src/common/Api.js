import axios from "axios";

export const API_KEY = "a9118a3a";

export default axios.create({
    baseURL: 'https://www.omdbapi.com/',
});