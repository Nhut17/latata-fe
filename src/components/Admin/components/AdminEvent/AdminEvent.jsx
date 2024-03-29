import React, { useEffect, useState } from 'react'
import { Tabs, Tab, Content } from '../TabButton/Tab.jsx'
import './AdminEvent.scss'
import BannerCate from './SubComponent/BannerCate.jsx';
import BannerHome from './SubComponent/BannerHome.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { addEventBanner, getAllEventBanner } from '../../../../redux/Admin/adminSlice.js';
const AdminEvent = () => {

  const dispatch = useDispatch()
  const { successAddEventBanner, event_banner } = useSelector(state => state.admin)

  useEffect(() => {

      dispatch(getAllEventBanner())

  },[])


  useEffect(() => {

    if(successAddEventBanner)
    {
      window.location.reload()
    }

  },[successAddEventBanner])
  console.log('event: ',event_banner)


  const [active, setActive] = useState(0);
  const handleClick = e => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

  
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
        <Content active={active === 0}>
          <BannerHome eventBanner={event_banner}  />
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
        <BannerCate cate={`Phụ kiện`}/>
        </Content>
        <Content active={active === 5}>
        <BannerCate cate={`Smartwatch`}/>
        </Content>

        <Content active={active === 6}>
        <BannerCate cate={`Đồng hồ`}/>
        </Content>
        <Content active={active === 7}>
        <BannerCate cate={`Tivi`}/>
        </Content>

        <Content active={active === 8}>
        <BannerCate cate={`Nhà thông minh`}/>
        </Content>
      
      </>
    </div>

   
   
  )
}

export default AdminEvent