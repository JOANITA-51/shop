import React from 'react'
import {useAuth} from '../contexts/Auth'

const Dashboard = () => {
    const currentUser = useAuth()
    return (
        <div>
            {currentUser}
            <Link to = "/account">Account</Link>
        </div>
    )
}

export default Dashboard
