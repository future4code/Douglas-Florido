import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { goToCreateAccount } from "../../Routes/Walker"
import useForm from '../../Components/LoginComponents/HandleLogin/HandleLogin.js'
import loginVerification from '../../Components/LoginComponents/LoginVerification/LoginVerification'
import {verifyLogin} from '../../Components/Requisitions/Requisitions'

const LoginPage = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" })
  const history = useHistory()   

  return (
    <div class="containerCentral">
      <div>
        <label >Login:</label>
        <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Login"></input>
        <label >Password:</label>
        <input name="password" type="password" value={form.password} onChange={onChange} placeholder="Password"></input>

        <button onClick={() => verifyLogin(form, history)}>Enter</button>
      </div>
      <button onClick={() => goToCreateAccount(history)}>Create Account</button>

    </div>
  );
}

export default LoginPage;
