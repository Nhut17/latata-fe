import React, { useState } from 'react'
import { Tabs, Tab, Content } from '../TabButton/Tab.jsx'
import './AdminEvent.scss'
import Banner from './SubComponent/Banner.jsx';
import BannerHome from './SubComponent/BannerHome.jsx';
import ModalBanner from './SubComponent/ModalBannerHome.jsx';
const AdminEvent = () => {

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
          <BannerHome/>
        </Content>
        <Content active={active === 1}>
          <Banner/>
        </Content>

        <Content active={active === 2}>
          <h1>Content 1</h1>
        </Content>
        <Content active={active === 3}>
          <h1>Content 2</h1>
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