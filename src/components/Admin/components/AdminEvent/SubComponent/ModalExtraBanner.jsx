import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import '../AdminEvent.scss'
import UploadImage from './UploadImage';
import { CloudUploadOutlined } from '@ant-design/icons'
const ModalExtraBanner = ({showExtraBanner,setShowExtraBanner}) => {
    const handleClickExtraBanner = () => {
        setShowExtraBanner(false)
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
  
      let name = 'Extra banner'
      formData.append('name',name)
  
    //   dispatch(addEventBanner(formData))

   }

    return (
        <div className="modal-banner-home">
                <Modal
                    open={showExtraBanner}
                    onClose={handleClickExtraBanner}
                    classNames={{
                        overlay: 'customOverlay',
                        modal: 'custom-modal-detail-order',
                    }}
                >
                    <p style={{fontWeight : 'bold', marginBottom : '10px'}}>Banner phụ: </p>
                    <UploadImage width={850} height={150} />              
                    <UploadImage width={850} height={150}/>

                    <div className="save-image">
                        <button>Lưu</button>
                    </div>
                </Modal>
            </div>
    )
}

export default ModalExtraBanner