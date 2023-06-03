import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import '../AdminEvent.scss'
import UploadImage from './UploadImage';
import { CloudUploadOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux';
import { addEventBanner } from '../../../../../redux/Admin/adminSlice';
const ModalExtraBanner = ({showExtraBanner,setShowExtraBanner}) => {

  const dispatch = useDispatch()

    const handleClickExtraBanner = () => {
        setShowExtraBanner(false)
    }

    const [selectedImage, setSelectedImage] = useState([])

    
  
   const handleUpload = () => {
  
      const formData = new FormData()
      
      selectedImage.forEach(image => {
        formData.append('images', image)
      })
  
      let name = 'subBanner'
      formData.append('name',name)
  
      dispatch(addEventBanner(formData))

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
                    
                    <UploadImage width={850} height={150} 
                                setSelectedImage={setSelectedImage}
                                isMultiple={true} />              
                         
                    <div className="save-image">
                        <button onClick={handleUpload}>Lưu</button>
                    </div>
                </Modal>
            </div>
    )
}

export default ModalExtraBanner