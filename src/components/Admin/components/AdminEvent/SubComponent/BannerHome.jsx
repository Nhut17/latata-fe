import React, { useState } from 'react'
import {FormOutlined}  from "@ant-design/icons"
import '../AdminEvent.scss'
import ModalBannerHome from './ModalBannerHome'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import ButtonPrev from '../../../../SlickSlider/ButtonPrev';
import ButtonNext from '../../../../SlickSlider/ButtonNext';
import { sliders_home } from '../../../../data';
import { Link } from 'react-router-dom'
import ModalSliderHome from './ModalSliderHome';
import ModalExtraBanner from './ModalExtraBanner';
const BannerHome = ({eventBanner}) => {

    let filterEvent = eventBanner ? eventBanner?.filter(img => img.name.toLowerCase() === 'home') : []

    const listEventHome =eventBanner?.filter(img => img.name.toLowerCase() === 'home')
    const listEventSubSlider =eventBanner?.filter(img => img.name.toLowerCase() === 'sliderhome')
    const listEventSubBanner =eventBanner?.filter(img => img.name.toLowerCase() === 'subbanner')

    

    const handleClickBannerHome = () => {
        setShowBannerHome(true)
    }

    const handleClickSliderHome = () => {
        setShowSliderHome(true)
    }

    const handleClickExtraBanner = () => {
        setShowExtraBanner(true)
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
    
    const [showBannerHome, setShowBannerHome] = useState(false)
    const [showSliderHome, setShowSliderHome] = useState(false)
    const [showExtraBanner, setShowExtraBanner] = useState(false)


    return (
        <>
            <div className="banner-home">
                <h3>Trang chủ</h3>
                <div className="main-banner">
                    <p>Banner chính trang chủ: </p>
                       
                            <img    src={listEventHome[0]?.images[0]?.url} 
                                    key={listEventHome[0]?.images[0]?.url_id} 
                                    alt={listEventHome[0]?.images[0]?.url_id} />
                               
                    <div className="edit" onClick={handleClickBannerHome}>
                        <button>Chỉnh sửa</button>
                        <FormOutlined />
                    </div>
                </div>

                <div className="banner-slide">
                    <p>Banner slider trang chủ: </p>
                    
                    <Slider {...settings}>
                    {
                        listEventSubSlider[0]?.images?.map((slide,index) =>(
                            <div className="slide" key={index} style={{marginLeft: 70}}>
                        
                                <img src={slide.url} 
                                    key={slide.url_id} 
                                    alt={slide.url_id} />
                          
                            </div>
                        ))
                    }
                    </Slider>
                    <div className="edit" onClick={handleClickSliderHome} style={{'margin': '40px auto'}} >
                        <button>Chỉnh sửa</button>
                        <FormOutlined />
                    </div>


                    
                </div>

                <div className="extra-banner">
                    <p>Banner phụ: </p>
                    <div style={{textAlign: 'center'}}>
                       {
                        listEventSubBanner && listEventSubBanner[0]?.images?.map(val => (
                            <img src={val.url} 
                                key={val.url_id} 
                                alt={val.url_id} />
                        ))
                       }
                    </div>

                    <div className="edit" onClick={handleClickExtraBanner}>
                        <button>Chỉnh sửa</button>
                        <FormOutlined />
                    </div>
                </div>

                {/* <div className="banner-watch">
                    <p>Banner đồng hồ</p>
                </div> */}
            </div>

            {
                showBannerHome && 
                <ModalBannerHome    showBannerHome={showBannerHome} 
                                    setShowBannerHome={setShowBannerHome} 
                />
            }

            {
                showSliderHome && 
                <ModalSliderHome    showSliderHome={showSliderHome}
                                    setShowSliderrHome={setShowSliderHome}
                />
            }

{
                showExtraBanner && 
                <ModalExtraBanner   showExtraBanner={showExtraBanner}
                                    setShowExtraBanner={setShowExtraBanner}
                />
            }


        </>
    )
}

export default BannerHome