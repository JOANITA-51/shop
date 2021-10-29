// import React from 'react'
// import {useAuth} from '../contexts/Auth'
// import{
//     Route,
//     Redirect
// } from 'react-router-dom'



// const PrivateRoute = ({children, ...rest}) => {
//     const {currentUser} = useAuth()

//     return (
//         <Route {...rest}
//             render = {()=>{
//                 currentUser? (children): (<Redirect to ="/not-authorized"/>)

//             }
//         }
//         />

//     )
// }

// export default PrivateRoute
