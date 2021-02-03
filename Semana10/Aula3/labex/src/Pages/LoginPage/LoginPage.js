import React from 'react';
import {useHistory}  from "react-router-dom";
import goToCreateAccount from "../../Routes/Walker"
import goToMainPage from "../../Routes/Walker"


const  LoginPage = () => {
  const history = useHistory()


  return (

    <div>
    
        <label >Login:</label> <input placeholder="Login"></input>
        <label >Password:</label> <input placeholder="Password"></input>
        <button onClick={() => goToMainPage(history)}>Enter</button>
        <button onClick={ () => goToCreateAccount(history)}>Create Account</button>
       
    </div>
  );
}

export default LoginPage;
