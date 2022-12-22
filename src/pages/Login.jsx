import React, { useEffect } from 'react'
import HeaderLogin from '../components/Login/HeaderLogin'
import LoginForm from '../components/Login/LoginForm'
import '../sass/login/login.scss'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate()
    const { currentUser } = useSelector(state => state.user)

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
    }, [])

    useEffect(() => {


        if(currentUser?.role === "admin")
          {
            console.log('login redirect to admin')
                navigate('/admin')
          } 
        if(currentUser?.role === "user"){
                navigate('/')
          }
            
        
    },[currentUser])
  return (
    <div className='bg-login'>

      
      {/* <HeaderLogin/> */}
      <LoginForm/>
    </div>
  )
}

export default Login



