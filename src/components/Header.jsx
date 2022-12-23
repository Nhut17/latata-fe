import '../sass/header/header.scss'
import logo from '../assets/images/logo.png'
import cart from '../assets/images/cart.png'
import { Link, useNavigate , NavLink} from 'react-router-dom'
import {categories} from './data'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../redux/User/userSlice'
import SearchProduct from './Home/SearchProduct'
import { useEffect, useState } from 'react'
import { getCate } from '../redux/Category/categorySlice'

const Header = () => {

  const [search, setSearch] = useState('')
  
  const {currentUser} = useSelector(state => state.user)
  const {listCartUser } = useSelector(state => state.cart)
  const {listProduct } = useSelector(state => state.product)
  const {listCate } = useSelector(state => state.category)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  useEffect(() => {
    dispatch(getCate())
  },[])

  const handleLogout = () => {
    dispatch(logoutUser())
      localStorage.clear()
      navigate('/')
      navigate(0)
  }

    // Text search product
    const handleSearchProduct = (e) => {
      setSearch(e.target.value)
    }

  
      // Search Product
  const searchProducts = (data) => {

    return data.filter(val => val.name?.toLowerCase().includes(search.toLowerCase()))
  }

  return (
    <div className="header">
      <header>
      <div className="container">
       
        <div className="main-header flex j-between a-center">
          <div className="logo">
            <Link to='/' reloadDocument>
              <img src={logo} alt="latata" />
            </Link>
          </div>
          <div className="group-search">
            <input type="text" 
                    placeholder='Bạn tìm gì...'
                    value={search}
                    onChange={handleSearchProduct} />
            {
              search.length > 0 && <SearchProduct listProduct={searchProducts(listProduct)} />
            }
          </div>

          <div className="cart">
            <Link to='/cart'>
              <img src= {cart} alt="" />
            </Link>
            <span>{
              listCartUser ? listCartUser.products.length : 0
            }</span>
          </div>

          <div className="top-header">
          {
            currentUser ? 
            <>

            <Link>
            <div className="profile">
              <div className="login-complete">
                <div className="avatar flex">

                    <img src={currentUser?.avatar?.url} alt="" />
                    <span className="success-login">{currentUser?.name}</span>
                   

                  </div>
                  {/* <p className="success-login" ><span>{currentUser?.name}</span></p>  */}


                    <div className="dropdown-profile">
                    <ul>
                      <Link to='/profile'><li>Thông tin cá nhân</li></Link>
                      <Link to='/myOrder'><li>Đơn hàng của tôi</li></Link>           
                      <li onClick={handleLogout}>Đăng xuất</li>
                    </ul>  
                  </div>  
                </div>    

                
            </div>      
            </Link>

            </>
            : (
              <p
              className='login'>
                <Link to='/dang-nhap'>
                  <span>Đăng nhập</span>&nbsp;
                  <span>|</span>
                  &nbsp;
                </Link>
              <Link to='/dang-ky'>
                <span>Đăng ký</span>
              </Link>
            </p>
            )
          }
         
        
        </div>

        </div>

        <div className="header-content">
            <div className="list-categories flex j-between">
                {listCate.map(item => (
                  <div className="item pointer" key={item._id}>
                   
                    <Link to={`/${item.name}/${item._id}`}>
                      
                        <img src={item.icon} alt="" />
                        
                        <span>{item.name}</span>
                     
                    </Link>
                    
                  </div>

                ))}

                  
                
            </div>
        </div>
      </div>
    </header>
    </div>
  )
}

export default Header

