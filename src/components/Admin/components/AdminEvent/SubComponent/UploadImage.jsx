
import React, { useState } from 'react'
import '../AdminEvent.scss'
import { CloudUploadOutlined } from '@ant-design/icons'
const UploadImage = ({width, height,icon}) => {
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
                  transform: 'translate(50%,-50%)',
                  right: '50%',
                  zIndex: 100,
                  cursor: 'pointer'
                  }}>
                    <CloudUploadOutlined/>
                    
                  </span>
                  <img style={{height: '110px', background: 'white'}}  src={previewImg} alt="Tải hình ảnh"  

                  />

                  
                  </div>
                 

              </label>
              <input id="file-input" type="file"
              
            //   {...register("images")}
              onChange={handleImage}
              accept="images/*"
              multiple
              />
              {/* <p style={{textAlign : 'center', marginTop: '10px'}}> <b>{title}</b> </p> */}
            </div>
          </form>

        
        </div>
    </div>
  )
}

export default UploadImage