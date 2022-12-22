import React from 'react'
import banner from '../../assets/images/home/big_banner.png'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { sliders_home } from '../data';
import ButtonPrev from '../SlickSlider/ButtonPrev';
import ButtonNext from '../SlickSlider/ButtonNext';


const BigBanner = () => {
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

    

  return (
    <div className="banner">
        <Link to='/'>
            <img src={banner} alt="" />
        </Link>

        <div className="sliders">
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
        </div>

    </div>
  )
}

export default BigBanner
