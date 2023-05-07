import React from 'react'
import BigBanner from '../../../../Home/BigBanner'
import TopSlider from '../../../../Tablet/TopSlider.jsx'
import '../AdminEvent.scss'
import {sliderTablet, bannerTablet} from '../../../../../components/Tablet/dataTablet.js'
import { FormOutlined } from '@ant-design/icons'

const Banner = () => {
  return (
    <div className="banner-orther" style={{'width': '1100px', 'margin': '30px auto'}}>
        <p>Banner slide trang Điện thoại</p>
        <TopSlider sliders={sliderTablet} banners={bannerTablet}/>

        <div className="edit"  style={{'margin': '40px auto'}} >
                        <button>Chỉnh sửa</button>
                        <FormOutlined />
                    </div>
    </div>
  )
}

export default Banner