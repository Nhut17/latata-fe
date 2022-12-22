import React, { useEffect } from 'react'
import HeaderLogin from '../components/Login/HeaderLogin'
import LoginForm from '../components/Login/LoginForm'
import '../sass/login/login.scss'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ForgotPasswordForm from '../components/ForgotPassword/ForgotPasswordForm';

const ForgotPassword = () => {

  const navigate = useNavigate()
    const { currentUser } = useSelector(state => state.user)


    useEffect(() => {


        if(currentUser?.user?.role === "admin")
          {
            console.log('login redirect to admin')
                navigate('/admin')
          } 
        if(currentUser?.user?.role === "user"){
                navigate('/')
          }
            
        
    },[currentUser])
  return (
    <div className='bg-login'>

      <ForgotPasswordForm/>
      
    </div>
  )
}

export default ForgotPassword



