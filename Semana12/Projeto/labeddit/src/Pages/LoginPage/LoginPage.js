import React from 'react'
import Button from '@material-ui/core/Button'

function LoginPage() {
    return (
      <div>
        <input placeholder="E-mail"></input>
        <input placeholder="Password"></input>
        <Button variant="contained" color="primary">Login</Button>
        <Button variant="contained" color="primary">Create Your Account</Button>
      </div>
    );
  }
  
  export default LoginPage;
  