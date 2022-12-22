import React, { useEffect } from 'react'
import Banner from '../../components/Home/Banner'
import banner from '../../assets/images/smartWatch/banner_smartWatch.png'
import MenuTopFixed from './MenuTopFixed'
import ListBlockSmartWatch from './ListBlockSmartWatch' 
import { useDispatch, useSelector } from 'react-redux'
import { getProductCate, resetListCate } from '../../redux/Product/productSlice'
import { useParams } from 'react-router-dom'


const MainSmartWatch = () => {

  const {listProductCate} = useSelector(state => state.product)
  const dispatch = useDispatch()
  const {id} = useParams()

  useEffect(() => {
    dispatch(resetListCate())
    dispatch(getProductCate(id))
  },[])

  return (
    <div className='main-smart-watch'>

        <Banner banner={banner} />

        {/* <MenuTopFixed /> */}

        <div className="container">


        <ListBlockSmartWatch listProduct={listProductCate} />

        </div>
    </div>
  )
}

export default MainSmartWatch