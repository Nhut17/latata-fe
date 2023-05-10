import React, { useState } from 'react'
import BigBanner from '../../../../Home/BigBanner'
import TopSlider from '../../../../Tablet/TopSlider.jsx'
import '../AdminEvent.scss'
import {sliderTablet, bannerTablet} from '../../../../../components/Tablet/dataTablet.js'
import { FormOutlined } from '@ant-design/icons'
import ModalBanner from './ModalBanner'

const Banner = () => {
    const [showBanner, setShowBanner] = useState(false)

    const handleClickBanner = () => {
        setShowBanner(true)
    }
    return (
        <>
            <div className="banner-orther" style={{'width': '1100px', 'margin': '30px auto'}}>
                <p>Banner slide trang Điện thoại</p>
                <TopSlider sliders={sliderTablet} banners={bannerTablet}/>

                <div className="edit" onClick={handleClickBanner}  style={{'margin': '40px auto'}} >
                                <button>Chỉnh sửa</button>
                                <FormOutlined />
                            </div>
            </div>

            {
                showBanner && 
                <ModalBanner  showBanner={showBanner} 
                setShowBanner={setShowBanner} 
                />
            }
        </>
    )
}

export default Banner