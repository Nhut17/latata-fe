import React, { useEffect } from 'react'
import banner from '../../assets/images/home/big_banner.png'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { sliders_home } from '../data';
import ButtonPrev from '../SlickSlider/ButtonPrev';
import ButtonNext from '../SlickSlider/ButtonNext';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEventBanner } from '../../redux/Admin/adminSlice';


const BigBanner = () => {
    const { event_banner } = useSelector(state => state.admin)
    const dispatch = useDispatch()

    const listEventHome =event_banner?.filter(img => img.name.toLowerCase() === 'home')
    const listEventSubSlider =event_banner?.filter(img => img.name.toLowerCase() === 'sliderhome')

    console.log(listEventSubSlider)

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

    useEffect(() => {

        dispatch(getAllEventBanner())

    },[])

  return (
    <div className="banner">
        <Link to='/'>
            <img    src={listEventHome[0]?.images[0]?.url} 
                    key={listEventHome[0]?.images[0]?.url_id} 
                    alt={listEventHome[0]?.images[0]?.url_id} />
        </Link>

        <div className="sliders">
            <Slider {...settings}>
               {
                listEventSubSlider[0]?.images?.map((slide,index) =>(
                    <div className="slide" key={index}>
                       <Link to=''>
                                <img src={slide.url} 
                                    key={slide.url_id} 
                                    alt={slide.url_id} />
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
