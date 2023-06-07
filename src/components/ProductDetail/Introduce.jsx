import React, {useEffect, useReducer, useState}from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { product_detail, option } from './data';
import ButtonNext from '../SlickSlider/ButtonNext';
import ButtonPrev from '../SlickSlider/ButtonPrev';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addCart } from '../../redux/Cart/cartSlice';
import { getInfoTech } from '../../redux/Category/categorySlice';


const Introduce = ({data}) => {

    console.log('data: ', data)

    const {listCate, info_tech} = useSelector(state => state.category)


    const idCate = listCate?.filter(cate => cate.name === data.category) 
    console.log(info_tech)

    useEffect(() => {

        if(idCate)
        {
            const id_cate = idCate[0]._id
            dispatch(getInfoTech(id_cate))
        }

    },[])

    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const [active, setActive] = useState(0);
    const priceDeal = useSelector(state => state.product.priceDeal)
  
    const { currentUser } = useSelector(state => state.user)
    const { listCartUser } = useSelector(state => state.cart)
    const currentProduct = listCartUser?.products.find(val => val.productId == id)
    
 
    const [isStock,setIsStock] = useState(currentProduct ? data.stock - currentProduct?.quantity : data.stock)

    console.log(isStock)


   
    // handle Buy
    const handleBuy =  () => {
        if(!currentUser){
            navigate('/dang-nhap')
        }
        else{
            const data = {
                productId: id,
                quantity: 1
            }
                dispatch(addCart(data))
                    .then(() => {
                        navigate('/cart')
                    })
        }
    }


    // setting css react-snippers
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };
    

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        nav: true,
        prevArrow: <ButtonPrev />,
        nextArrow: <ButtonNext />
      };
    return (
       
                <div className='product-introduce flex  j-between bd-bottom'>

          
                <div className="product-detail-image">
                <Slider {...settings}>
                    {data.images?.map(img => (
                        <>
                            <img src={img.url} alt="" />
                        </>
                    ))}
                </Slider>
                   

            </div>
            

        <div className="product-detail-content">
            {/* <div className="product-option">
                  {option.map(val => (
                    <button
                    id={val.id}
                    onClick={handleClick}
                    style={
                        active === val.id ? {
                            backgroundColor:"#000B49",
                            color: 'white'
                        }:{}
                    }
                    >{val.ram}GB</button>
                  ))}
            </div> */}

            <div className="product-price-location">
                <div className="location">
                    <span>Giá tại</span>
                    <span style={{fontWeight: 'bold'}}> Hồ Chí Minh</span>
                </div>
                <div className="product-price">
                    <span className='pricenew'>
                    {priceDeal?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} <span className='currency'>&#8363;</span>
                    </span>
                    <span className='priceold'>
                    {data.price?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} <span className='currency'>&#8363;</span>
                    </span>
                    <span className='discount'>-10%</span>
                </div>
            </div>

            <div class="product-introduce-promotion border">
            <div class="product-introduce-promotion-title">
                <p
                style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    padding: "10px 0px",
                }}
                >
               Thông số kỹ thuật
                </p>
                {/* <p style={{ padding: "0 0 5px 0" }}>
                Giá và khuyến mãi áp dụng đến hết 23:59 31/12
                </p> */}
            </div>
            <div class="product-introduce-promotion-list ">
                {
                    info_tech && info_tech.map((val,index) => (
                       <div class="product-introduce-promotion-item">
                            <div class="promotion-circle">
                                <span style={{ color: "#fff", fontSize: "10px" }}>{index+1}</span>
                            </div>
                            <span style={{ width: "95%", display: "block" }}>
                                {val.title}: <span>{val.content}</span>
                            </span>
                                </div> 
                    ))
                }
            </div>
            </div>
            {
                isStock <= 0 ? 
                (
                <>
                {
                    (currentProduct?.quantity - data.stock) <=0 &&
                    <p style={{
                        paddingTop: '10px',
                        color: 'red'
                    }}>Số lương sản phẩm tồn đã hết. Không thể thêm được nữa!</p>
                }
                {
                    data.stock <= 0 &&
                    <p style={{
                        paddingTop: '10px',
                    color: 'red'
                }}>*Tạm thời hết hàng</p>
                    }

                <button className='btn-buy-now' 
                onClick={handleBuy}
                disabled={true}
                style={{
                    cursor: 'not-allowed',
                    opacity: 0.2
                }} >MUA NGAY </button>
                </>

                 ):

                  <button className='btn-buy-now' onClick={handleBuy}>MUA NGAY</button> 
            }

        </div>
                </div>
            )
       

  
}

export default Introduce
