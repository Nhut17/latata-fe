
import React, { useState } from 'react'
import '../AdminEvent.scss'
import { CloudUploadOutlined } from '@ant-design/icons'
const UploadImage = ({width, height}) => {
  const [previewImg,setPreviewImg] = useState('')
  const [selectImage,setSelectImage] = useState('')

  const handleImage = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if(reader.readyState === 2){
        setPreviewImg(reader.result)
        setSelectImage(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  return (
    <div className="upload-image-event">
        <div className="img-group flex ">
          <form>
            <div class="image-upload" style={{position: 'relative'}}>
              <label for="file-input">
                <div class="upload-icon" style={{width :`${width}px`, height: `${height}px`}}>
                <span style={{
                  fontSize : '40px',
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  right: -30,
                  
                  cursor: 'pointer'
                  }}>
                  <CloudUploadOutlined />
                  </span>
                  <img style={{height: '110px'}}  src={previewImg} alt="" 

                  />

                  
                  </div>
                 

              </label>
              <input id="file-input" type="file"
              
            //   {...register("images")}
              onChange={handleImage}
              accept="images/*"
              />
            </div>
          </form>

        
        </div>
    </div>
  )
}

export default UploadImage