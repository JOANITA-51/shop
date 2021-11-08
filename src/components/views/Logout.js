import { useEffect } from "react"
import { useAuth } from "../contexts/Auth"
import { Link } from "react-router-dom"

const Logout = () => {

    const {setCurrentUser} = useAuth()
    useEffect(()=>{
        localStorage.setItem('loggedIn', null)
        localStorage.setItem('user',null)
        setCurrentUser(null)
    })
    return (
        <div>
            <h1>
                you've logged out
            </h1>
            <p><Link to ="/login"> Login</Link></p>
        </div>
    )
}

export default Logout
