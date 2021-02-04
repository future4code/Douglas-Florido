import React, {useState} from 'react';
import {useHistory}  from "react-router-dom";
import {goToCreateAccount} from "../../Routes/Walker"
import {goToMainPage} from "../../Routes/Walker"
import useForm from '../../Components/LoginComponents/HandleLogin/HandleLogin.js'


const  LoginPage = () => {
  const [form, onChange, clear] = useForm({email:"", password:""})
  const history = useHistory()


  return (
    <div>
    
        <label >Login:</label> 
        <input value={form.email} onChange={onChange} placeholder="Login"></input>
        <label >Password:</label>
        <input value={form.password} onChange={onChange} placeholder="Password"></input>

        <button onClick={() => goToMainPage(history)}>Enter</button>
        <button onClick={ () => goToCreateAccount(history)}>Create Account</button>
       
    </div>
  );
}

export default LoginPage;
