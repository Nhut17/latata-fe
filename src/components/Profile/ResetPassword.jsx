import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../../sass/Profile/profile.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { resetPassword, updatePassword } from '../../redux/User/userSlice';
const ResetPassword = () => {
    const {   register,
        handleSubmit,
        getValues    ,
        formState: { errors }} = useForm();

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {successUpdatePassword, errorUpdatePassword} = useSelector(state => state.user)


    useEffect(() => {
        if(successUpdatePassword)
         {
 
         toast('Thay đổi mật khẩu thành công', {
             position: "top-right",
             autoClose: 500,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: false,
             draggable: true,
             progress: undefined,
             theme: "light",
             });
 
         const timer = setTimeout(() =>{
             navigate('/profile')
         },1500)
 
         return () => {
             clearTimeout(timer)
         }
 
         }
 
     },[successUpdatePassword])
     
     useEffect(() => {
        dispatch(resetPassword())
     },[])

    const onHandleSubmit = (formData) => {
        console.log(formData)
        dispatch(updatePassword(formData))
    }

    return (
        
        <div className="bg-profile">
            <div className="container-profile">
                <form onSubmit={handleSubmit(onHandleSubmit)}>

                <div className="reset-pass">
                    <h3>ĐỔI MẬT KHẨU</h3>
                    <div className="input-group">
                        <span>Mật khẩu hiện tại</span>
                        <input type="password" 
                                {...register("oldPassword",{
                                    required: true
                                })} />
                                {
                                errors.oldPassword?.type === 'required' &&  <span className='err-msg'>Mời bạn nhập mật khẩu hiện tại</span>
                            }
                    </div>

                    <div className="input-group">
                        <span>Mật khẩu mới</span>
                        <input type="password" 
                                {...register("password",{
                                    required: true,
                                    minLength: 7
                                })} />
                                  {
                                errors.password?.type === 'required' &&  <span className='err-msg'>Mời bạn nhập mật khẩu mới</span>
                            }
                             {
                                        errors.password?.type === 'minLength' &&  <span className='err-msg'>Mật khẩu có ít nhất 7 kí tự</span>
                                        }
                    </div>

                    <div className="input-group">
                        <span>Xác nhận mật khẩu</span>
                        <input type="password" 
                                {...register("comfirmPassword",{
                                    required: true,
                                    validate: (value) => {
                                        const password = getValues('password')
                                        if(password !== value)
                                        {
                                            return 'Nhập lại mật khẩu không khớp!'
                                        }
                                    }
                                })} />
                                  {
                                errors.comfirmPassword?.type === 'required' &&  <span className='err-msg'>Mời bạn nhập nhập lại mật khẩu mới</span>
                            }
                            {
                                        errors.comfirmPassword?.type !== 'pattern' &&  <span className='err-msg'>{errors.rePassword?.message}</span>
                                    }
                    </div>

                    <button type='submit'>Lưu</button>
                    {errorUpdatePassword &&
                                         <span className='err-msg'>Mật khẩu cũ sai!</span>
                    }
                </div>
                </form>
            </div>
        </div>
      
            
        
    )
}

export default ResetPassword