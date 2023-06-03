import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import '../AdminEvent.scss'
import { CloudUploadOutlined } from '@ant-design/icons'
import UploadImage from './UploadImage';
import { useDispatch } from 'react-redux';
import { addEventBanner } from '../../../../../redux/Admin/adminSlice';


const ModalBannerHome = ({showBannerHome,setShowBannerHome}) => {

    const dispatch = useDispatch()

    const handleClickBannerHome = () => {
        setShowBannerHome(false)
    }

    const [selectedImage, setSelectedImage] = useState([])
    const [imagePreview,setImagePreview] = useState([])
    
   const handleOnChangeImages = (e) =>{
  
    const files = Array.from(e.target.files)
  
    setSelectedImage([])
    setImagePreview([])
  
    files.forEach(file => {
  
      const reader = new FileReader()
  
      reader.onload = () => {
     
        if(reader.readyState === 2)
        {
          setImagePreview(prev => [...prev , reader.result])
          setSelectedImage(prev => [...prev , reader.result])
        }
      }

    reader.readAsDataURL(file)
  
    })

   }
  
   const handleUpload = () => {

      const formData = new FormData()
  
      selectedImage.forEach(image => {
        formData.append('images', image)
      })
  
      let name = 'Home'
      formData.append('name',name)
  
      dispatch(addEventBanner(formData))

   }

    return (
        <div className="modal-banner-home">
            <Modal
                open={showBannerHome}
                onClose={handleClickBannerHome}
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'custom-modal-detail-order',
                }}
            >
                <p style={{fontWeight : 'bold', marginBottom : '10px'}}>Banner chính trang chủ: </p>
                <div className='flex'>
                    <UploadImage width={800} height={200}/>
                 
                </div>
                

                <div className="save-image">
                    <button onClick={handleUpload}>Lưu</button>
                </div>
            </Modal>
        </div>
    )
}

export default ModalBannerHome