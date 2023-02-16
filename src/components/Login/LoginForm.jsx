import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import login from '../../assets/images/login.png'
import { loginUser } from '../../redux/User/userSlice'
const LoginForm = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {  errorLogin } = useSelector(state => state.user)

    console.log('error login: ' + errorLogin)

    // useEffect(() => {
    //     if(currentUser)
    //     {
    //         if(currentUser?.role === "ADMIN")
    //         {
    //             navigate('/admin')
    //         } 
    //         if(currentUser?.role === "USER"){
    //             navigate('/')
    //         }
            
    //     }
    // },[currentUser])

    const { 
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onHandleSubmit = (formData) => {
            dispatch(loginUser(formData))
            // navigate('/')
    }

  return (
    <form className='login-form' onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="container">
            <div className='form'>
                <div className="main-form">
                    <span className="sign-up">Đăng Nhập</span>

    
                    <div className="input-group">
                        <div className="input-name">
                            <i class="fa-solid fa-envelope ic"></i>
                            <input 
                                    type="text" 
                                    placeholder='Email'
                                    {...register('email', {
                                        required: true,
                                        pattern: {
                                            value:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                            message: 'Địa chỉ email không đúng',
                                        }
                                    })}
                                     />
                            
                            {
                                errors.email?.type === 'required' && <span className='err-msg'>Mời bạn nhập email</span>
                            }
                            {
                                errors.email?.type === 'pattern' && <span className='err-msg'>{errors.email?.message}</span>
                            }

                        </div>
                        <div className="input-password">
                            <i class="fa-solid fa-lock ic"></i>
                            <input 
                                    type="password" 
                                    placeholder='Mật Khẩu'
                                    {...register('password',{
                                        required: true
                                    })} />
                                    {
                                     errors.password?.type === 'required' && <span className='err-msg'>Mời bạn nhập password</span>
                                    }
                        </div>

                        <Link to="/quen-mat-khau"><p>Quên mật khẩu</p></Link>
                    </div>
                   
                    
                   

                    <button className='btn-sign-up' type='submit'>ĐĂNG NHẬP</button>
                    {
                            errorLogin && <span className='err-msg'>Sai email hoặc mật khẩu!</span>
                    }

                </div>
                <div className="img">
                    <img src={login} alt="" />
                    </div>
                
            </div>
        </div> 
    </form>
  )
}

export default LoginForm
