import React from 'react'
import { Navigate} from 'react-router-dom'


const RequireAuth = ({children}) => {
    let token = localStorage.getItem("auth_token");

    if(!token){
        return (
            <>
                <Navigate to="/" />
            </>
        )
    }

    return children;
}

export default RequireAuth