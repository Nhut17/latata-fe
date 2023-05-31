import React, { useState } from 'react'
import { Tabs, Tab, Content } from '../TabButton/Tab.jsx'
import './AdminEvent.scss'
import BannerCate from './SubComponent/BannerCate.jsx';
import BannerHome from './SubComponent/BannerHome.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { addEventBanner } from '../../../../redux/Admin/adminSlice.js';
const AdminEvent = () => {

  const dispatch = useDispatch()
  const { successAddEventBanner } = useSelector(state => state.admin)

  const [active, setActive] = useState(0);
  const handleClick = e => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

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

    let name = 'home'
    formData.append('name',name)

    dispatch(addEventBanner(formData))

    

 }


 console.log('success : ', successAddEventBanner)
  
  return (
    
    <div className="admin-event">

      <Tabs>
        <Tab onClick={handleClick} active={active === 0} id={0}>
          Trang chủ
        </Tab>
        <Tab onClick={handleClick} active={active === 1} id={1}>
          Điện thoại
        </Tab>
        <Tab onClick={handleClick} active={active === 2} id={2}>
          Laptop
        </Tab>

        <Tab onClick={handleClick} active={active === 3} id={3}>
          Tablet
        </Tab>

        <Tab onClick={handleClick} active={active === 4} id={4}>
          Phụ kiện
        </Tab>

        <Tab onClick={handleClick} active={active === 5} id={5}>
          Smartwatch
        </Tab>

        <Tab onClick={handleClick} active={active === 6} id={6}>
          Đồng hồ
        </Tab>

        <Tab onClick={handleClick} active={active === 7} id={7}>
          Tivi
        </Tab>

        <Tab onClick={handleClick} active={active === 8} id={8}>
          Nhà thông minh
        </Tab>
      </Tabs>

      <>
        {/* <div style={{
          margin: 10
        }}>
          <span>image 1</span>
          <input type="file"
                  accept='images/*'
                  onChange={handleOnChangeImages}
                  multiple
                  />
            
        </div>
      
      

        <button onClick={handleUpload}>upload</button> */}

      </>

      <>
      
      {
        imagePreview.length > 0 && imagePreview.map(img => (
          <img src={img}
                key={img}
                width='55'
                height='52' />
        ))
      }
      
      </>

      <>
        <Content active={active === 0}>
          <BannerHome/>
        </Content>
        <Content active={active === 1}>
          <BannerCate cate={`Điện thoại`}/>
        </Content>

        <Content active={active === 2}>
          <BannerCate cate={`Laptop`}/>

        </Content>
        <Content active={active === 3}>
          <BannerCate cate={`Tablet`}/>

        </Content>

        <Content active={active === 4}>
          <h1>Content 1</h1>
        </Content>
        <Content active={active === 5}>
          <h1>Content 2</h1>
        </Content>

        <Content active={active === 6}>
          <h1>Content 1</h1>
        </Content>
        <Content active={active === 7}>
          <h1>Content 2</h1>
        </Content>

        <Content active={active === 8}>
          <h1>Content 1</h1>
        </Content>
      
      </>
    </div>

   
   
  )
}

export default AdminEvent