import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import '../AdminEvent.scss'
import UploadImage from './UploadImage';
import { CloudUploadOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux';
import { addEventBanner } from '../../../../../redux/Admin/adminSlice';

const ModalSliderHome = ({showSliderHome,setShowSliderrHome}) => {

    const dispatch = useDispatch()
     
    const handleClickSliderHome = () => {
        setShowSliderrHome(false)
    }

    const [selectedImage, setSelectedImage] = useState([])
   
    
  //  const handleOnChangeImages = (e) =>{
  
  //   const files = Array.from(e.target.files)
  
  //   setSelectedImage([])
  //   setImagePreview([])
  
  //   files.forEach(file => {
  
  //     const reader = new FileReader()
  
  //     reader.onload = () => {
     
  //       if(reader.readyState === 2)
  //       {
  //         setImagePreview(prev => [...prev , reader.result])
  //         setSelectedImage(prev => [...prev , reader.result])
  //       }
  //     }

  //   reader.readAsDataURL(file)
  
  //   })

  //  }
  
   const handleUpload = () => {
  
      const formData = new FormData()
  
      selectedImage.forEach(image => {
        formData.append('images', image)
      })
  
      let name = 'SliderHome'
      formData.append('name',name)
  
      dispatch(addEventBanner(formData))

   }

    return (
        <div className="modal-slider-home">
            <Modal
                open={showSliderHome}
                onClose={handleClickSliderHome}
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'custom-modal-detail-order',
                }}
            >
                <p style={{fontWeight : 'bold', marginBottom : '10px'}}>Banner slider trang chủ: </p>
                <UploadImage width={500} height={'auto'}
                            setSelectedImage={setSelectedImage}
                            isMultiple={true} />
                
                <div className="save-image">
                    <button onClick={handleUpload} >Lưu</button>
                </div>
            </Modal>
        </div>
    )
}

export default ModalSliderHome