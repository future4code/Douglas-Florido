import Pokedex from '../Pages/Pokedex/Pokedex'
import Home from '../Pages/Home/Home'
import Details from '../Pages/Details/Details'
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function Router() {

    return (

        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/pokedex">
                    <Pokedex />
                </Route>
                <Route exact path="/details">
                    <Details />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}