import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

function LoginPage(props) {
  return (

    <div>
    
        <label >Login:</label> <input placeholder="Login"></input>
        <label >Password:</label> <input placeholder="Password"></input>
        <button onClick={() => { props.changePage("mainpage") }} >Enter</button>
        <a onClick={() => { props.changePage("createaccountpage") }}>Create Account</a>
       
    </div>
  );
}

export default LoginPage;
