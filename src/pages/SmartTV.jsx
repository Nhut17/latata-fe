import React, { useEffect } from 'react'
import { bannerTV, sliderTablet, sliderTV } from '../components/Tablet/dataTablet'
import { bannerTablet } from '../components/Tablet/dataTablet'
import '../sass/SmartPhone/smartphone.scss'
import MainSub from '../components/SubComponents/MainSub'
import { list_product } from '../components/data'
import { useDispatch, useSelector } from 'react-redux'
import { getProductCate, resetListCate } from '../redux/Product/productSlice'
import { useParams } from 'react-router-dom'

const SmartTV = () => {

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
    <div className='smart-tv'>
        <MainSub list_product={listProductCate}
                 parentCate={'Tivi'}
                 childCate={'Tivi'}
                 sliders={sliderTV}
                 banners={bannerTV} />
    </div>
  )
}

export default SmartTV 
