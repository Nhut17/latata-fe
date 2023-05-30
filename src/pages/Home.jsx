import React, { useEffect, useRef, useState } from 'react'
import '../sass/Home/Home.scss'
import BigBanner from '../components/Home/BigBanner'
import FlashSale from '../components/Home/FlashSale'
import OptionPromote from '../components/Home/OptionPromote'
import Banner from '../components/Home/Banner'
import banner_opt from '../assets/images/home/banner_opt.png'

import ShoppingTrends from '../components/Home/ShoppingTrends'
import GreatDeals from '../components/Home/GreatDeals'
import RecommendToday from '../components/Home/RecommendToday'
import Tech24h from '../components/Home/Tech24h'

import MenuOptions from '../components/Home/MenuOptions'
import ListWatchesSeries from '../components/Home/ListWatchesSeries'
import bannerGalaxy from '../assets/images/home/banner_galaxy.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getProduct } from '../redux/Product/productSlice'
import jwt_decode from 'jwt-decode'
import { logoutUser, resetActionUser } from '../redux/User/userSlice'
import axios from 'axios'
import { resetActionOrder } from '../redux/Order/orderSlice'
import ScrollToTop from '../components/Home/ScrollToTop'
import ListPhone from '../components/Home/ListPhone'

import MessengerCustomerChat from 'react-messenger-customer-chat';

const Home = () => {
  const navigate = useNavigate()
  const success = useSelector(state => state.user.successLogin)
  const { currentUser,successLogin} = useSelector(state => state.user)
  const [visible,setVisible] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
  })
  }, [])

 

  useEffect(() =>{
    if(successLogin)
    {
        toast(`Xin chào ${currentUser?.name}`, {
          position: "top-right",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          });

          const timer = setTimeout(() => {
            dispatch(resetActionUser())
          },1500)

          return () => {
            clearTimeout(timer)
          }
    }
  },[])




// scroll
useEffect(() =>{

  const scrollTo = () => {
    if(window.scrollY > 200)
    {
      setVisible(true)
    }
    else{
      setVisible(false)
    }
  }

  document.addEventListener('scroll', scrollTo)

  return () => {
    document.removeEventListener('scroll', scrollTo)
  }
},[])

  // expired token => log out account
  useEffect(() => {
    try{

      const date = new Date();
      const decodeToken = jwt_decode(currentUser?.token)
      if(decodeToken.exp < date.getTime() / 1000 ){
          dispatch(logoutUser())
          navigate(0)
      }
    }
    catch(e){

    }
  },[])
  

  // redict to admmin
  useEffect(() => {
    if(!currentUser){
      navigate('/')
    }
   
    if(currentUser?.role === 'admin'){
        navigate('/admin')
      }
    if(currentUser?.role === 'user'){
      navigate('/')
    }

  },[])

  useEffect(() => {
    dispatch(getProduct())
},[])

const shoppingTrendsRef = useRef()

  return (
    <div className="home">
            <ToastContainer />
            {
                visible &&
                <>
                    <ScrollToTop />
                    {/* <MessengerCustomerChat
                        pageId="100090895334787"
                        appId="1385632485087591"
                        htmlRef="<REF_STRING>"
                        /> */}

                        
                </>
            }
        

      <div className="big-banner">
        <BigBanner />
      </div>

      <div className="container">
        <div className="banner-home">

          <Banner banner={banner_opt} />
        </div>
        <OptionPromote  />

        <RecommendToday/>
        
        <FlashSale />


        {/* <ShoppingTrends/> */}
        
        

        <MenuOptions />
        <ListWatchesSeries />
        <div className="banner-galaxy">
          <Banner banner={bannerGalaxy} />
        </div>

        <ListPhone />

        {/* <GreatDeals/> */}
        <Tech24h/>
      </div>


    </div>
  )
}

export default Home
