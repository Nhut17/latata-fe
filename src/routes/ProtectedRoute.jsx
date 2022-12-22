import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, useNavigate } from 'react-router-dom'


const ProtectedRoute = ({children}) => {

    const { currentUser } = useSelector(state => state.user)
    
    console.log(currentUser)

    if(currentUser?.role === 'admin')
    {
        return <Navigate to='/admin' />
    }
    return children
}

export default ProtectedRoute
