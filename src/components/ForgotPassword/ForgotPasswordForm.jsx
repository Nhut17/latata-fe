import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import login from '../../assets/images/login.png'
import { forgotPassword, loginUser, sendEmail } from '../../redux/User/userSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPasswordForm = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {successSendOTP } = useSelector(state => state.user)
    
    const { 
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    useEffect(() => {
        if(successSendOTP){
          
            toast('Gửi email thành công', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            const time = setTimeout(() => {
                navigate('/change-password')
            },2000)

            return () => {
                clearTimeout(time)
            }
        }

    },[successSendOTP])

    const onHandleSubmit = (formData) => {
           
        dispatch(forgotPassword(formData))
        dispatch(sendEmail(formData))
    }

  return (
    <form className='login-form' onSubmit={handleSubmit(onHandleSubmit)}>
        <ToastContainer />

        <div className="container">
            <div className='form'>
                <div className="main-form">
                    <span className="sign-up">Quên mật khẩu</span>

    
                    <div className="input-group">
                        <span className='instructions'>Nhập địa chỉ email của bạn và chúng tôi sẽ <br/> gửi cho bạn hướng dẫn để đặt lại mật khẩu của bạn.</span>
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



                        {/* <div className="input-OTP">
                            <i class="fa-brands fa-codepen ic"></i>
                            <input 
                                    type="text" 
                                    placeholder='Nhập mã OTP'
                                    
                                     />
                          
                            

                        </div> */}
                        

                        {/* <Link to="/quen-mat-khau"><p><u>Quên mật khẩu</u></p></Link> */}

                    </div>
                   
                    
                    <button className='btn-sign-up'>TIẾP TỤC</button>



                    
                    {/* <Link to='/sendOTP'><button className='btn-sign-up'>TIẾP TỤC</button></Link> */}

                </div>
                <div className="img">
                    <img src={login} alt="" />
                    </div>
                
            </div>
        </div> 
    </form>
  )
}

export default ForgotPasswordForm
