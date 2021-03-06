import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import FeedPage from '../Pages/FeedPage/FeedPage'
import LoginPage from '../Pages/LoginPage/LoginPage'
import PostPage from '../Pages/PostPage/PostPage'
import SignupPage from '../Pages/SignupPage/SignupPage'
import ErrorPage from '../Pages/ErrorPage/ErrorPage.js'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/">
                    <FeedPage />
                </Route>

                <Route exact path="/loginpage">
                    <LoginPage />
                </Route>

                <Route exact path="/postpage">
                    <PostPage />
                </Route>

                <Route exact path="/signuppage">
                    <SignupPage />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router