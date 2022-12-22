import React, {useReducer, useState}from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { product_detail, option } from './data';
import ButtonNext from '../SlickSlider/ButtonNext';
import ButtonPrev from '../SlickSlider/ButtonPrev';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addCart } from '../../redux/Cart/cartSlice';


const Introduce = ({data}) => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const [active, setActive] = useState(0);
    const priceDeal = useSelector(state => state.product.priceDeal)
    const navigate = useNavigate()
    const { currentUser } = useSelector(state => state.user)
    const { listCartUser } = useSelector(state => state.cart)
    const currentProduct = listCartUser?.products.find(val => val.productId == id)
    
    console.log(currentProduct)
    const [isStock,setIsStock] = useState(currentProduct ? data.stock - currentProduct?.quantity : data.stock)

    const handleClick = (e) =>{
        setActive(e.target.id)
    }

    // handle Buy
    const handleBuy = () => {
        if(!currentUser){
            navigate('/dang-nhap')
        }
        else{
            const data = {
                productId: id,
                quantity: 1
            }
            dispatch(addCart(data))
            navigate('/cart')
        }
    }

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
            {/* <Slider {...settings}>
                {product_detail.map(img => (
                    <div className="product-detail-image">
                        <img src={img.url} alt="" />
                    </div>
                ))}
            </Slider> */}
            <div className="product-detail-image">
                <Slider {...settings}>
                    {data.images?.map(img => (
                        <>
                            <img src={img.url} alt="" />
                        </>
                    ))}
                </Slider>

                {/* <div class="product-introduce-expand flex">
                    <div class="product-introduce-expand-item flex">
                        <div class="expand-item-logo flex">
                            <i class="fa-solid fa-medal text-3xl"></i>
                        </div>
                        <span class="product-introduce-expand-item-text">Điểm nổi <br /> bật</span>
                    </div>
                    <div
                        class="product-introduce-expand-item flex">
                        <div class="expand-item-logo flex">
                        <i class="fa-solid fa-circle-play text-3xl"></i>
                        </div>
                        <span class="product-introduce-expand-item-text">Video</span>
                    </div>
                    <div class="product-introduce-expand-item flex">
                        <div class="expand-item-logo flex">
                        <i class="fa-solid fa-box-open text-3xl"></i>
                        </div>
                        <span class="product-introduce-expand-item-text">Mở hộp</span>
                    </div>
                    <div class="product-introduce-expand-item flex">
                        <div class="expand-item-logo flex">
                        <i class="fa-solid fa-camera text-3xl"></i>
                        </div>
                        <span class="product-introduce-expand-item-text">
                        Chụp từ <br /> camera
                        </span>
                    </div>
                    <div class="product-introduce-expand-item flex">
                        <div class="expand-item-logo flex">
                        <i class="fa-solid fa-arrows-spin text-3xl"></i>
                        </div>
                        <span class="product-introduce-expand-item-text">Hình 360 <br /> độ</span>
                    </div>
                    <div class="product-introduce-expand-item flex">
                        <div class="expand-item-logo flex">
                        <i class="fa-solid fa-file-signature text-3xl"></i>
                        </div>
                        <span class="product-introduce-expand-item-text">
                        Thông số <br /> kỹ thuật
                        </span>
                    </div>
                    <div class="product-introduce-expand-item flex">
                        <div class="expand-item-logo flex">
                        <i class="fa-solid fa-circle-info text-3xl"></i>
                        </div>
                        <span class="product-introduce-expand-item-text">
                        Thông tin <br /> sản phẩm
                        </span>
                    </div>
                </div> */}
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
                        <span> Hồ Chí Minh</span>
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
                    Khuyến mãi
                    </p>
                    <p style={{ padding: "0 0 5px 0" }}>
                    Giá và khuyến mãi áp dụng đến hết 23:59 31/12
                    </p>
                </div>
                <div class="product-introduce-promotion-list ">
                    <div class="product-introduce-promotion-item">
                    <div class="promotion-circle">
                        <span style={{ color: "#fff", fontSize: "10px" }}>1</span>
                    </div>
                    <span style={{ width: "95%", display: "block" }}>
                        Trả góp 0% thẻ tín dụng
                    </span>
                    </div>
                    <div class="product-introduce-promotion-item">
                    <div class="promotion-circle">
                        <span style={{ color: "#fff", fontSize: "10px" }}>2</span>
                    </div>
                    <span style={{ width: "95%", display: "block" }}>
                        Giảm giá 40% gói Bảo hành mở rộng Sasung Care + 12 tháng
                    </span>
                    </div>
                    <div class="product-introduce-promotion-item">
                    <div class="promotion-circle">
                        <span style={{ color: "#fff", fontSize: "10px" }}>3</span>
                    </div>
                    <span style={{ width: "95%", display: "block" }}>
                        Nhập mã TGDD giảm 5% tối đa 400.000đ cho đơn hàng từ{" "}
                    </span>
                    </div>
                    <div class="product-introduce-promotion-item">
                    <div class="promotion-circle">
                        <span style={{ color: "#fff", fontSize: "10px" }}>4</span>
                    </div>
                    <span style={{ width: "95%", display: "block" }}>
                        Nhập mã TGDD giảm 5% tối đa 400.000đ cho đơn hàng từ 500.000đ
                        trở lên khi thanh toán qua ví Moca trên ứng dụng Grab
                    </span>
                    </div>
                   
                </div>
                </div>

                {/* <div class="product-introduce-payment">
                    <h3 class="product-introduce-payment-title">Ưu đãi khi thanh toán</h3>
                    <div class="product-introduce-payment-main flex j-between">
                        <div class="product-introduce-payment tpbank border">
                        <div class="">
                            <input type="radio" name="bank-option" class="checkbox-round" />
                            <label style={{ color: "#CC33FF", paddingLeft: "5px" }}>
                            TPBank{" "}
                            </label>
                        </div>
                        <p style={{ padding: "5px 0" }}>Giảm 500.000đ</p>
                        <p>Sản phẩm từ 8tr</p>
                        </div>
                        <div class="product-introduce-payment eximbank border">
                        <div class="">
                            <input type="radio" name="bank-option" class="checkbox-round" />
                            <label style={{ color: "#3366CC", paddingLeft: "5px" }}>
                            Eximbank
                            </label>
                        </div>
                        <p style={{ padding: "5px 0" }}>Giảm 500.000đ</p>
                        <p>Sản phẩm từ 5tr</p>
                        </div>
                    </div>
                </div> */}

                {/* <button className='btn-buy-now' onClick={handleBuy}>MUA NGAY</button> */}

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
                        data.stock === 0 &&
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
