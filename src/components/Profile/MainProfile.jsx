import React, { useEffect, useState } from 'react'
import '../../sass/Profile/profile.scss'
import {useNavigate, useParams, Link} from 'react-router-dom'
import { useForm } from "react-hook-form";
import ChangePassword from './ResetPassword';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../redux/User/userSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainProfile = ({currentUser}) => {


  const [avatar,setAvatar] = useState('')
  const [avatarPreview,setAvatarPreview] = useState(null)

  const dispatch = useDispatch()
  const { successUpdate } = useSelector(state => state.user)
  const navigate = useNavigate()

  const { register, handleSubmit} = useForm();

  // onchange avatar
  const handleAvatar = (e) =>{
    const reader = new FileReader();

    reader.onload = () => {
      if(reader.readyState === 2){
        setAvatarPreview(reader.result)
        setAvatar(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  useEffect(() => {
    if(successUpdate)
     {

     toast('Update thành công', {
         position: "top-right",
         autoClose: 1000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: false,
         draggable: true,
         progress: undefined,
         theme: "light",
         });

     const time = setTimeout(() =>{
         navigate('/')

     },2000)

     return () => {
         clearTimeout(time)
     }

     }

 },[successUpdate])

  // handle update profile
  const handleChangeProfile = (formData) => {
      const{
        name,
        email,
        phone
      } = formData;

      const dataS= new FormData()
      dataS.set('name', name)
      dataS.set('email', email)
      dataS.set('phone', phone)
      dataS.set('avatar', avatar)

      dispatch(updateProfile(dataS))
    
  }

  


  return (
    <div className='bg-profile'>
            <ToastContainer />

      <div className="container-profile">
        <div className="profile-avatar">
            <div className="avatar">
              <img src={ avatarPreview ? avatarPreview : currentUser?.avatar?.url} alt="" /> <br />
              <div className="upload-avatar">
                      <input 
                        type="file"
                        onChange={handleAvatar}
                        accept="images/*" />
                      </div>
            </div>

         
            
        </div>
        <div className="profile-content">
            <div className="profile-title">
                <h3>Hồ sơ của tôi</h3>
                <span>Quản lý thông tin hồ sơ để bảo mật tài khoản</span>
            </div>
            <div className="profile-detail">
                <form 
                      onSubmit={handleSubmit(handleChangeProfile)}
                      encType='multipart/form-data'
                     >
                    <span>Tên đăng nhâp</span>
                    <input {...register("username")} value={currentUser?.username} disabled />

                    
                    {/* <span>Tên</span>
                    <input {...register("name")}/> */}

                    <span>Họ Tên</span>
                    <input {...register("name")} defaultValue={currentUser?.name}/>
                    <span>Email</span>
                    <input {...register("email")} defaultValue={currentUser?.email}/>

                    <span>Số điện thoại</span>
                    <input  {...register("phone")} defaultValue={currentUser?.phone}/>

                    <span>Ngày sinh</span>
                    <input  {...register("birthday")} type='date' defaultValue={currentUser?.birthday} disabled/>

                    <Link to='/reset-password'>
                    <p className='change-pass'><u>Đổi mật khẩu</u></p>
                    </Link>

                    <button type='submit'>Lưu</button>
                </form>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default MainProfile
