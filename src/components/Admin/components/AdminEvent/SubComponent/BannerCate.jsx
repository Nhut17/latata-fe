import React, { useState } from 'react'
import BigBanner from '../../../../Home/BigBanner'
import TopSlider from '../../../../Tablet/TopSlider.jsx'
import '../AdminEvent.scss'
import {sliderTablet, bannerTablet} from '../../../../Tablet/dataTablet.js'
import { FormOutlined } from '@ant-design/icons'
import ModalBannerCate from './ModalBannerCate'

const BannerCate = ({cate}) => {
    const [showBannerCate, setShowBannerCate] = useState(false)

    const handleClickBannerCate = () => {
        setShowBannerCate(true)
    }
    return (
        <>
            <div className="banner-cate" style={{'width': '1100px', 'margin': '30px auto'}}>
                <p style={{fontWeight: 'bold'}}>Banner slide trang {cate}: </p>
                <TopSlider sliders={sliderTablet} banners={bannerTablet}/>

                <div className="edit" onClick={handleClickBannerCate}  style={{'margin': '40px auto'}} >
                                <button>Chỉnh sửa</button>
                                <FormOutlined />
                            </div>
            </div>

            {
                showBannerCate && 
                <ModalBannerCate    showBannerCate={showBannerCate}
                                    setShowBannerCate={setShowBannerCate} 
                />
            }
        </>
    )
}

export default BannerCate