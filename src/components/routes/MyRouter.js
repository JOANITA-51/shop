import React from 'react'
import PrivateRoute from '../routes/PrivateRoute'
import Login from '../views/Login'
import Account from '../views/Account'
import Checkout from '../views/Checkout'
import Dashboard from '../views/Dashboard'
import Home from '../views/Home'
import Cart from '../views/Cart'
import Pay from '../views/Pay'
import {
    BrowserRouter as Router,
    Switch, Route, Link
} from 'react-router-dom'

function MyRouter() {
    const [page, setPage] = React.useState(null)

    return (
        <Router>
            {/* <button onClick={() => setPage(page === 'posts' ? 'todos' : 'posts')} >
                {page === 'posts' ? 'Todos' : 'Posts'}
            </button> */}
            {/* <Link to="/posts">Posts</Link>
            <Link to="/todos">Todos</Link> */}
            <Switch>
                <Route path="/" exact>
                    <Home />
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
                <Route path="/Dashboard">
                    <Dashboard />
                </Route>
                <Route path="/Account">
                    <Account />
                </Route>
                <Route path="/checkout">
                    <Checkout />
                </Route>
                <Route path="/Pay">
                    <Pay />
                </Route>
            </Switch>
{/*             {page === 'posts' ? <button onClick={() => setPage('todos')} > Todos </button>
                : <button onClick={() => setPage('posts')} > Posts </button>} */}

            {/* {page === 'posts' ? <Posts /> : <Todos />} */}
        </Router>
    )
}

export default MyRouter