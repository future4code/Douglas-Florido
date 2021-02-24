import axios from 'axios'
import React from 'react'
import {BASE_URL} from '../../Constants/URLs'

export const signup = (info) =>{

    const body = {
        email: info.email,
        password: info.password,
        username: info.username
    }

    axios.post(BASE_URL+'signup',body)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })

}