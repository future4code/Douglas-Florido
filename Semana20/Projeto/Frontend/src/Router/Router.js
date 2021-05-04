import { BrowserRouter, Switch, Route } from "react-router-dom";

import MainPage from '../Pages/MainPage/MainPage'
import SignupPage from "../Pages/SignupPage/SignupPage";
import LoginPage from "../Pages/LoginPage/LoginPage";


export default function Router() {

    return (

        <BrowserRouter>
            <Switch>
                <Route exact path="/login">                    
                    <LoginPage/>
                </Route>
                
                <Route exact path="/">
                    <MainPage/>
                    
                </Route>

                <Route exact path="/signup">
                    <SignupPage/>
                    
                </Route>

            </Switch>
        </BrowserRouter>
    )
}