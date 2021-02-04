import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from '../Pages/LoginPage/LoginPage.js'
import ApplicationFormPage from '../Pages/ApplicationFormPage/ApplicationFormPage.js'
import MainPage from '../Pages/MainPage/MainPage.js'
import CreateAccount from '../Pages/CreateAccount/CreateAccount.js'
import CreateTripPage from '../Pages/CreateTripPage/CreateTripPage.js'



export default function Router() {
  return (
    <BrowserRouter>      
      <Switch>
        
        <Route exact path={"/createaccount"}>
          <CreateAccount />
        </Route>

        <Route exact path={"/mainpage"}>
          <MainPage />
        </Route>

        <Route exact path={"/createtrippage"}>
          <CreateTripPage />
        </Route>

        <Route exact path={"/applicationformpage"}>
          <ApplicationFormPage />
        </Route>

        <Route exact path="/">
          <LoginPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}
