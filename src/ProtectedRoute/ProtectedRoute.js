import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({isAuthenticated}) => {

    if(!isAuthenticated){
        return <Navigate to={"/trial"}/>
    }

  return (
    <div>ProtectedRoute</div>
  )
}

export default ProtectedRoute;