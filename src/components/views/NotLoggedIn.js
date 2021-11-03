import { useAuth } from '../contexts/Auth'
import { useEffect, useState } from 'react'
import {Link, Redirect, useHistory} from 'react-router-dom'

const NotLoggedIn = () => {
    const {setCurrentUser} = useAuth()
    const history = useHistory()
    const [isLogin, setLogin] = useState(false)

    useEffect(() => {
        const loggedIn = Number (localStorage.getItem('loggedIn'))
        if (loggedIn === 1)
            setCurrentUser(loggedIn)
            setLogin(loggedIn)
    }, [])
     if (isLogin)
        return < Redirect to={{pathname: `${history.location.state.pathname}`}}/>
    return (
        <div>
            <h1>You are not Logged in</h1>
            <p><Link to = "/login">Login</Link></p>
        </div>
    )
}

export default NotLoggedIn
