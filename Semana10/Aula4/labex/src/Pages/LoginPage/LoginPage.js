import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { goToCreateAccount } from "../../Routes/Walker"
import useForm from '../../Components/LoginComponents/HandleLogin/HandleLogin.js'
import loginVerification from '../../Components/LoginComponents/LoginVerification/LoginVerification'

const LoginPage = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" })
  const [loginInfo, setLoginInfo] = useState({})
  const history = useHistory()

  return (
    <div>

      <label >Login:</label>
      <input name="email" value={form.email} onChange={onChange} placeholder="Login"></input>
      <label >Password:</label>
      <input name="password" value={form.password} onChange={onChange} placeholder="Password"></input>

      <button onClick={() => loginVerification(form, history, loginInfo, setLoginInfo)}>Enter</button>
      <button onClick={() => goToCreateAccount(history)}>Create Account</button>

    </div>
  );
}

export default LoginPage;
