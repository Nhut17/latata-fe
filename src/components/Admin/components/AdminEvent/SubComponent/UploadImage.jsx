
import React, { useState } from 'react'
import '../AdminEvent.scss'
import { CloudUploadOutlined } from '@ant-design/icons'
const UploadImage = ({width, height,icon, setSelectedImage,isMultiple}) => {

  const [previewImg,setPreviewImg] = useState()
  const [selectImage,setSelectImage] = useState('')
 


  const handleImage = (e) => {
    const files = Array.from(e.target.files)
  
    setSelectedImage([])
    setPreviewImg([])
  
    files.forEach(file => {
  
      const reader = new FileReader()
  
      reader.onload = () => {
     
        if(reader.readyState === 2)
        {
          setPreviewImg(prev => [...prev , reader.result])
          setSelectedImage(prev => [...prev , reader.result])
        }
      }

    reader.readAsDataURL(file)
    })
  
  }
  return (
    <div className="upload-image-event">
        <div className="img-group flex ">
          <form>
            <div class="image-upload" style={{position: 'relative'}}>
              <label for="file-input">
                <div class="upload-icon" style={{width :`${width}px`,  height : previewImg?.length>0 ? 'auto' : '150px',textAlign:'center'}}>
                <span style={{
                  fontSize : '40px',
                  position: 'absolute',
                  top: '50%',
                  transform: 'translate(50%,-50%)',
                  right: '50%',
                  zIndex: -1,
                  cursor: 'pointer'
                  }}>
                    <CloudUploadOutlined/>
                    
                  </span>
                  { 
                    previewImg?.length > 0 &&
                    previewImg.map(img => (
                      <img style={{ width: '92%',height: '110px', background: 'white', zIndex : '10'}}  
                            src={img} alt="Tải hình ảnh"  />
                    ))
                  }
              
                  
                  </div>
                 

              </label>
              <input id="file-input" type="file"
              
            //   {...register("images")}
              onChange={handleImage}
              accept="images/*"
              multiple={isMultiple}
              />
              {/* <p style={{textAlign : 'center', marginTop: '10px'}}> <b>{title}</b> </p> */}
            </div>
          </form>

        
        </div>
    </div>
  )
}

export default UploadImage