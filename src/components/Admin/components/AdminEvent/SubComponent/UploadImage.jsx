import React from 'react'
import '../AdminEvent.scss'
const UploadImage = () => {
  return (
    <div className="upload-image">
        <div className="img-group flex ">
          <form>
            <div class="image-upload">
              <label for="file-input">
                <div class="upload-icon">
                  <img src='https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/04/banner/Promote-TZ-Des-1200x100-1.png' alt="" 
                
                  />
                  </div>
              </label>
              <input id="file-input" type="file"
            //   {...register("images")}
            //   onChange={handleImage}
              accept="images/*"
              />
            </div>
          </form>

        
        </div>
    </div>
  )
}

export default UploadImage