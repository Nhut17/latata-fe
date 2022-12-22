import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux'
import { getUser, registerUser, loginUser, resetActionRegister } from '../../redux/User/userSlice';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RegisterForm = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {successRegister , message , errorRegister} = useSelector(state => state.user)

    useEffect(() => {
       if(successRegister)
        {

        toast('Đăng ký thành công', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

        const succ = setTimeout(() =>{
            navigate('/')
            navigate(0)
        },2000)

        return () => {
            clearTimeout(succ)
        }

        }

    },[successRegister])

    const {
        register,
        handleSubmit,
        getValues    ,
        formState: { errors }
     } = useForm()


    
     const onHandleSubmit = (formData) => {
       const { username, name , email, phone ,password} = formData
       const data = {
            username : username,
            name :  name,
            email: email,
            phone: phone,
            password: password
       }
        dispatch(registerUser(data)) 
       

     }

  return (
    <form className='main' onSubmit={handleSubmit(onHandleSubmit)}>
            <ToastContainer />
            <div className="container">
                <div className='form'>
                   <div className="main-form">
                     <span className="sign-up">Đăng Ký</span>

                        <div className="input-group">
                        <div className="input-username">
                            <i class="fa-solid fa-user ic"></i>
                            <input type="text" 
                                    placeholder='Tên Người Dùng'
                                    {...register('username',{
                                        required: true
                                    })}   />
                            {
                                errors.username?.type === 'required' &&  <span className='err-msg'>Mời bạn nhập username</span>
                            }
                        </div>
                        <div className="input-name">
                            <i class="fa-solid fa-user ic"></i>
                            <input type="text" 
                                    placeholder='Họ Tên'
                                    {...register('name',{
                                        required: true
                                    })}   />
                            {
                                errors.name?.type === 'required' &&  <span className='err-msg'>Mời bạn nhập họ tên</span>
                            }
                        </div>           
                        <div className="input-email">
                            <i class="fa-solid fa-envelope ic"></i>
                            <input 
                                    type="text" 
                                    placeholder='Email'
                                    {...register('email',{
                                        required:true,
                                        pattern: {
                                            value:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                            message: 'Địa chỉ email không đúng',
                                        }
                                    })} />
                                      {
                                        errors.email?.type === 'required' &&  <span className='err-msg'>Mời bạn nhập email</span>
                                        }
                                      {
                                        errors.email?.type === 'pattern' &&  <span className='err-msg'>{errors.email?.message}</span>
                                        }
                        </div>
                        <div className="input-phone">
                            <i class="fa-solid fa-phone ic"></i>
                            <input 
                                    type="text" 
                                    placeholder='Số Điện Thoại'
                                    {...register('phone',{
                                        required: true,
                                        minLength: 9
                                    }) }/>
                                     {
                                        errors.phone?.type === 'required' &&  <span className='err-msg'>Mời bạn nhập số điện thoại</span>
                                        }
                                     {
                                        errors.phone?.type === 'minLength' &&  <span className='err-msg'>Số điện thoại không hợp lệ</span>
                                        }
                        </div>
                        <div className="input-password">
                            <i class="fa-solid fa-lock ic"></i>
                            <input 
                                    type="password" 
                                    placeholder='Mật Khẩu'
                                    {...register('password',{
                                        required: true,
                                        minLength: 7
                                    })} />
                                     {
                                        errors.password?.type === 'required' &&  <span className='err-msg'>Mời bạn nhập mật khẩu</span>
                                        }
                                        {
                                        errors.password?.type === 'minLength' &&  <span className='err-msg'>Mật khẩu có ít nhất 7 kí tự</span>
                                        }
                        </div>
                        <div className="input-repeat-password">
                            <i class="fa-solid fa-lock ic ic-repeat-pass"></i>
                            <input 
                                    type="password" 
                                    placeholder='Nhập Lại Mật Khẩu'
                                    {...register('rePassword', {
                                        required: true,
                                        validate: (value) => {
                                            const password = getValues('password')
                                            if(password !== value)
                                            {
                                                return 'Nhập lại mật khẩu không khớp!'
                                            }
                                        }
                                    })}/>
                                     {
                                        errors.rePassword?.type === 'required' &&  <span className='err-msg'>Mời bạn nhập lại mật khẩu</span>
                                    }
                                     {
                                        errors.rePassword?.type !== 'pattern' &&  <span className='err-msg'>{errors.rePassword?.message}</span>
                                    }
                        </div>

                        </div>

                        <div className="policy">
                            <input type="checkbox" {
                                ...register('policy',{
                                    required: true
                                })
                            } />
                            <span>Tôi đồng ý với <u>Dịch vụ chính sách</u> </span>
                            {
                                errors.policy?.type === 'required' &&  <span className='err-msg' style={{paddingLeft: 0}}>Hãy đồng ý với chính sách của chúng tôi</span>
                                }
                        </div>

                        <button className='btn-sign-up'>ĐĂNG KÝ</button>
                        {
                            errorRegister && <span className='err-msg'>{message}</span>
                        }

                   </div>
                   <div className="img">
                    <img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg" alt="" />
                   </div>
                </div>
            </div>
    </form>
  )
}

export default RegisterForm
