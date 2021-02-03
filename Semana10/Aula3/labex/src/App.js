import './App.css';
import LoginPage from './Pages/LoginPage/LoginPage.js'
import React, { useState } from 'react'
import MainPage from './Pages/MainPage/MainPage.js'
import CreateAccount from './Pages/CreateAccount/CreateAccount.js'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Router from './Routes/Router.js'


const App = () => {
  return (
    <Router/>
  )
}

export default App;
