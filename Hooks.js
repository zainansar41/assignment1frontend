import { useEffect, useState } from "react";
import axios from "axios";
import ENV from './config'


axios.defaults.baseURL = "https://assignment1backendl-ive.onrender.com";


export async function loginroute(email, password) {
    try {
        const response = await axios.post("/login", {
            email: email,
            password: password,
        });

        return { data: response.data, status: response.status };

    } catch (error) {
        return { status: 400 };
    }
}


export async function signuproute(email, password) {
    try {
        const response = await axios.post("/signup", {
            email: email,
            password: password,
        });

        return { data: response.data, status: response.status };
        
    } catch (error) {
        return { status: 400 };
    }
}