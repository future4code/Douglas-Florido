
import { goToMainPage } from '../../../Routes/Walker.js'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { verifyLogin } from '../../Requisitions/Requisitions.js'
import React, { useState } from 'react';


export const loginVerification = (information, history, loginInfo, setLoginInfo) => {
    // console.log(information, setLoginInfo)   
    verifyLogin(information, setLoginInfo)
  


    if(loginInfo.data.success === true) { goToMainPage(history) }

    else { alert("Incorrect e-mail or password") }

}

export default loginVerification;