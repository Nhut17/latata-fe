import React from 'react'
import ListProduct from '../ListProduct'
import banner from '../../assets/images/block_item_product/banner_specialSale.png'
import '../../sass/BlockProduct/blockSaleProduct.scss'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Product from '../Product'
import { list_product } from '../data'

const BlockSaleProduct = ({listProduct}) => {

    const ButtonNext = (props) => {

        const  {className, style, onClick} = props

        console.log(props)

        return <span className={className} onClick={onClick}
                      style={{...style,
                            position: 'absolute',
                            display: 'flex',
                            width:50,
                            height:80,
                            borderRadius: '5px',
                            backgroundColor: 'rgba(216,216,216,.7)',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transform: 'translate(-12px,-20px)',
                            opacity:0.7
                            }} ><i class="fa-solid fa-angle-right" style={{color: 'black',
                                                                            position: 'absolute',
                                                                            fontWeight: 'bold',
                                                                            fontSize:30}} ></i></span>
    }
    const ButtonPrev = (props) => {

        const {className, style, onClick} = props

        return <span className={className} onClick={onClick}
        style={{...style,
              position: 'absolute',
              display: 'flex',
              width:50,
              height:80,
              borderRadius: '5px',
              backgroundColor: 'rgba(216,216,216,.7)',
              alignItems: 'center',
              justifyContent: 'center',
              transform: 'translate(5px,-20px)',
              zIndex: 100,
              opacity:0.7
              }} ><i class="fa-solid fa-angle-left" style={{color: 'black',
                                                            position: 'absolute',
                                                            fontWeight: 'bold',                 
                                                            fontSize:30}} ></i></span>
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        nav: true,
        prevArrow: <ButtonPrev />,
        nextArrow: <ButtonNext />
        
      };

  return (
    <div className='block-sale-product'
           style={{
            backgroundImage: 'url(' + banner + ')',
           }} >
        
        <div className="slider-product">

           <Slider {...settings} >


            {
                listProduct?.map(data => (
                    <Product data={data} />
                ))
            }
           

           </Slider>

        </div>


    </div>
  )
}

export default BlockSaleProduct