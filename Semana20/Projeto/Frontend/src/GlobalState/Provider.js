import React, { useState } from "react";
import Context from "../GlobalState/Context.js"
import axios from "axios"
import { goToPage } from "../Router/Walker"



const Provider = (props) => {

    const [token, setToken] = useState("")

    const loginVerification = async (history, login, password) => {

        const body = {
            login,
            password
        }

        await axios.post("http://localhost:3003/user/login", body)
            .then((res) => {
                console.log(res)
                goToPage(history, "/")
                localStorage.setItem('token', res.data.token)                
            })
            .catch((err) => {
                console.log(err)
                alert("Error: Could not find your account")
            })
    }

    const signup = async (history, login, password) => {
        const body = {
            login,
            password
        }

        await axios.post("http://localhost:3003/user/signup", body)
            .then((res) => {
                console.log(res)
                goToPage(history, "/")
                localStorage.setItem('token', res.data.token)                
            })
            .catch((err) => {
                console.log(err)
                alert("Error: Couldn't create your Account")
            })


    }



    const states = {}
    const setters = {}
    const requests = { loginVerification, signup }

    const data = { states, setters, requests };



    return (
        <Context.Provider value={data}>
            {props.children}
        </Context.Provider>
    );
}

export default Provider;