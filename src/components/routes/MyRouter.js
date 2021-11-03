import React from 'react'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import Login from '../views/Login'
import Account from '../views/Account'
import Checkout from '../views/Checkout'
import Dashboard from '../views/Dashboard'
import Home from '../views/Home'
import Cart from '../views/Cart'
import Pay from '../views/Pay'
import NotAuthorized from '../views/NotAuthorized'
import NotFound from '../views/NotFound.js'
import {
    BrowserRouter as Router,
    Switch, Route
} from 'react-router-dom'

function MyRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/not-authorized">
                    <NotAuthorized />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
                <PrivateRoute path="/dashboard">
                    <Dashboard />
                </PrivateRoute>
                <PrivateRoute path="/account">
                    <Account />
                </PrivateRoute>
                <Route path="/checkout">
                    <Checkout />
                </Route>
                <PrivateRoute path="/Pay">
                    <Pay />
                </PrivateRoute>
                <Route path = "*">
                    <NotFound/>
                </Route>
            </Switch>

        </Router>
    )
}

export default MyRouter