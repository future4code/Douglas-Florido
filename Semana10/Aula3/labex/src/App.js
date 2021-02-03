import './App.css';
import LoginPage from './Pages/LoginPage/LoginPage.js'
import React, {useState} from 'react'
import MainPage from './Pages/MainPage/MainPage.js'
import CreateAccount from './Pages/CreateAccount/CreateAccount.js'
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [page, setPage] = useState("loginpage")

  const changePage = (props) => { 
    setPage(props) 
    
  
  }
  
  if(page==="loginpage"){
  return (
    <div class="containerCentral">
      <div class="caixaCentral">
        <LoginPage changePage={changePage}/>
      </div>
    </div>
  );}

  else if(page==="mainpage"){
    return(
      <div>
        <MainPage changePage={changePage}/>
      </div>
    )
  }

  else if(page==="createaccountpage"){
    return(
      <div>
        <CreateAccount changePage={changePage}/>
      </div>
    )
  }

}

export default App;
