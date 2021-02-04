import React, { useState } from 'react'
import Header from '../../Components/Header/Header.js'
import { createLogin } from '../../Components/Requisitions/Requisitions.js'
import axios from 'axios'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { goToLoginPage } from '../../Routes/Walker.js'



function CreateAccount() {
  // const [form, onChange, clear] = useForm({ email: "", password: "" });
  const [form, setForm] = useState({ login: "", password: "" })
  const history = useHistory()



  const handleLogin = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value })
    // console.log(name+":"+value)
  }

  return (
    <div>
      <lu>
        <li><label>Login:</label>
          <input value={form.login} onChange={handleLogin} name="login" placeholder="Text"></input></li>

        <li><label>Password:</label>
          <input value={form.password} onChange={handleLogin} name="password" placeholder="Text"></input></li>
        <li><button onClick={() => { createLogin(form) }}>Create</button></li>
      </lu>

      <button onClick={() => { goToLoginPage(history) }}>Back</button>
    </div>
  );
}

export default CreateAccount;
