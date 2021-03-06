import React from 'react'
import Button from '@material-ui/core/Button'
import useForm from '../../Components/CustomHook/CustomHook'
import { goToSignuppage } from '../../Routes/Walker';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import {login} from '../../Components/Requisitions/Requisitions'
import {Header} from '../../Components/Header/Header'

function LoginPage() {
  const [form, onChange, clear] = useForm({ email: "", password: "" })
  let history = useHistory()

  return (
    <div>
      <Header/>
      <input type="email" name="email" placeholder="E-mail" value={form.email} onChange={onChange}></input>
      <input type="password" name="password" placeholder="Password" value={form.password}onChange={onChange}></input>
      <Button variant="contained" color="primary" onClick={() => login(form,history)}>Login</Button>
      <Button variant="contained" color="primary" onClick={() => goToSignuppage(history)}>Create Your Account</Button>
    </div>
  );
}

export default LoginPage;
