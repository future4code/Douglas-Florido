import React, { useState } from 'react'
import Header from '../../Components/Header/Header.js'
import { createLogin } from '../../Components/Requisitions/Requisitions.js'
import axios from 'axios'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { goToLoginPage } from '../../Routes/Walker.js'
import useForm from '../../Components/LoginComponents/HandleLogin/HandleLogin'



function CreateAccount() {
  // const [form, onChange, clear] = useForm({ email: "", password: "" });
  const [form, onChange, clearFields] = useForm({ email: "", password: "" })
  const history = useHistory()


  return (
    <div>
      <lu>
        <li><label>Login:</label>
          <input value={form.email} onChange={onChange} name="email" placeholder="Text"></input></li>

        <li><label>Password:</label>
          <input value={form.password} onChange={onChange} name="password" placeholder="Text"></input></li>
        <li><button onClick={() => { createLogin(form) }}>Create</button></li>
      </lu>

      <button onClick={() => { goToLoginPage(history) }}>Back</button>
    </div>
  );
}

export default CreateAccount;
