import React, { useState } from 'react'
import {FormOutlined}  from "@ant-design/icons"
import '../AdminEvent.scss'
import ModalBanner from './ModalBanner'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import ButtonPrev from '../../../../SlickSlider/ButtonPrev';
import ButtonNext from '../../../../SlickSlider/ButtonNext';
import { sliders_home } from '../../../../data';
import { Link } from 'react-router-dom'
const BannerHome = () => {

    const handleClickBanner = () => {
        setShowBanner(true)
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: <ButtonPrev />,
        nextArrow: <ButtonNext />
      };
    
    const [showBanner, setShowBanner] = useState(false)
    return (
        <>
            <div className="banner-home">
                <h3>Trang chủ</h3>
                <div className="main-banner">
                    <p>Banner chính trang chủ: </p>
                    <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/04/banner/Promote-TZ-Des-1200x100-1.png" alt="" />
                    <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/04/banner/Promote-TZ-Des-1200x100-1.png" alt="" />
                    <div className="edit" onClick={handleClickBanner}>
                        <button>Chỉnh sửa</button>
                        <FormOutlined />
                    </div>
                </div>

                <div className="banner-slide">
                    <p>Banner slide trang chủ: </p>
                    
                    <Slider {...settings}>
                    {
                        sliders_home.map((slide,index) =>(
                            <div className="slide" key={index}>
                            <Link to=''>
                                <img src={slide.url} alt="" />
                            </Link>
                            </div>
                        ))
                    }
                    </Slider>
                    <div className="edit" onClick={handleClickBanner} style={{'margin': '40px auto'}} >
                        <button>Chỉnh sửa</button>
                        <FormOutlined />
                    </div>


                    
                </div>

                <div className="banner-watch">
                    <p>Banner đồng hồ</p>
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

export default BannerHome