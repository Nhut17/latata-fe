import React, { useEffect } from 'react'
import '../sass/admin/admin.scss'
import MainAdmin from '../components/Admin/MainAdmin'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { resetActionAdmin } from '../redux/Admin/adminSlice'
const Admin = () => {

  const navigate = useNavigate()
  const {currentUser} = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(resetActionAdmin())
  },[])

  useEffect(() =>{
 
    if(!currentUser || currentUser?.role === 'user'){

      navigate('/')
  }
  },[])

  return (  
    <div className='bg-admin'>
        <MainAdmin></MainAdmin>
    </div>
  )
}

export default Admin
