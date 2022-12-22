import React, { useEffect } from 'react'
import MainSub from '../components/SubComponents/MainSub'
import { bannerLaptop, sliderLaptop, sliderTablet } from '../components/Tablet/dataTablet'
import { bannerTablet } from '../components/Tablet/dataTablet'
import { list_product } from '../components/data'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct, getProductCate, resetListCate } from '../redux/Product/productSlice'
import { useParams } from 'react-router-dom'

const Laptop = () => {

  const {listProductCate} = useSelector(state => state.product)
  const dispatch = useDispatch()
  const {id} = useParams()
  
  useEffect(() => {
    dispatch(resetListCate())
    dispatch(getProductCate(id))
  },[])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
  })
  }, [])

  return (
    <div className='laptop'>
      <MainSub  list_product={listProductCate}
                parentCate={'Laptop'}
                childCate={'Laptop'}
                sliders={sliderLaptop}
                banners={bannerLaptop} />
    </div>
  )
}

export default Laptop
