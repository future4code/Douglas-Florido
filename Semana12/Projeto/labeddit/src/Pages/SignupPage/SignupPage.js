import React from 'react'
import Button from '@material-ui/core/Button'
import useForm from '../../Components/CustomHook/CustomHook'
import { useHistory } from "react-router-dom";
import {signup} from '../../Components/Requisitions/Requisitions'

function SignupPage() {
  const history = useHistory()   
  const [form, onChange, clear] = useForm({ email: "", password: "", username: "" })
  //onSubmit={()=>signup(form)} 
    return (
      <form onSubmit={()=>signup(form)}>
        <input name="email" type="email" placeholder="E-mail" value={form.email} onChange={onChange}></input>
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={onChange}></input>
        <input name="username" type="text" placeholder="Username" value={form.username} onChange={onChange}></input>
        
        <Button variant="contained" color="primary" onClick={()=>signup(form,)}>Create</Button>
      </form>
    );
  }
  
  export default SignupPage;
  