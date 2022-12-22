// import React from 'react'
// import {Link} from 'react-router-dom';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import StarRating from '../accessories/StarRating';



// function ListWatchProduct({listProduct})
// {
//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 1000,
//         slidesToShow: 5,
//         slidesToScroll: 5,
//         autoplay: false,
//         nav: true,
//         navText:['<span><i class="fas fa-chevron-left"></i></span>','<span><i class="fas fa-chevron-right"></i></span>']
        
//       };
//   return (
//     <div className='list-watch-product'>
//          <Slider {...settings}>
//                 {listProduct?.map(slide => (
//                     <Link
//                     to={{
//                         pathname: `/productdetail/${slide?.name}`,
//                         state: { productId: slide?.id },
//                       }} key={slide?.id} className='item' >
//                         <img src={slide?.image} alt="Slider"/>

//                         <div className="detail-product">
//                               <p id='nameproduct'>{slide?.name}</p>
//                               <p className='price-old'>
//                                   <del>{slide?.marketPrice
//                                     .toString()
//                                     .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span> </del>
//                                   <span>-{slide?.promotion}%</span>
//                               </p>

//                               <p className='price-new'> {slide?.price
//                                     .toString()
//                                     .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} <span className='currency'>&#8363;</span>
                              
//                               </p>
                            
//                         </div>
//                     </Link>
                    
//                 ))}
//           </Slider>

          
//     </div>
//   )
// }

// export default ListWatchProduct





import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ButtonPrev from '../SlickSlider/ButtonPrev';
import ButtonNext from '../SlickSlider/ButtonNext';



function ListWatchProduct({listProduct})
{
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: false,
        nav: true,
        //navText:['<span><i class="fas fa-chevron-left"></i></span>','<span><i class="fas fa-chevron-right"></i></span>']
        prevArrow: <ButtonPrev />,
        nextArrow: <ButtonNext />
      };
  return (
    <div className='list-watch-product'>
         <Slider {...settings}>
                {listProduct?.map(slide => (
                    <div className='item' key={slide._id}>
                        <img src={slide?.images[0]?.url} alt="Slider"/>

                        <div className="detail-product">
                              <h3>{slide?.name}</h3>
                              {/* <p id='nameproduct'>{slide.nameproduct}</p> */}
                              <p className='price-old'>
                                   <del>{slide?.price
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span> </del>
                                  <span>-{slide?.promotion}%</span>
                              </p>

                              <p className='price-new'> {slide?.priceDeal
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} <span className='currency'>&#8363;</span>
                              
                              </p>
                            
                        </div>
                    </div>
                    
                ))}
          </Slider>

          
    </div>
  )
}

export default ListWatchProduct
