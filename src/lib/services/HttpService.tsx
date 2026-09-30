import axios from "axios";
import { AppConfig } from "../config/AppConfig";

const axiosClient = axios.create({
    baseURL: AppConfig.apiUrl,
    timeout: 30000,
    timeoutErrorMessage: "Sorry! server doesnot respond in time",
    responseType: "json",
    responseEncoding: "UTF-8",

    headers: {
        "Content-Type": "application/json"
    }
})

export default axiosClient