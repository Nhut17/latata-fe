import React, { useEffect } from 'react'
import {sliderTablet,bannerTablet} from '../components/Tablet/dataTablet.js'
import '../sass/Tablet/Tablet.scss'
import '../sass/Home/Home.scss'
import MainSub from '../components/SubComponents/MainSub'
import { list_product } from '../components/data'
import { useDispatch, useSelector } from 'react-redux'
import { getProductCate, resetListCate } from '../redux/Product/productSlice.js'
import { useParams } from 'react-router-dom'

const Tablet = () => {

  const {listProductCate} = useSelector(state => state.product)
  const dispatch = useDispatch()
  const { id} = useParams()
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
    <div className='tablet bd-bottom'>
       
          <MainSub list_product={listProductCate}
                  parentCate={'Tablet'}
                  childCate={'Tablet'}
                  sliders={sliderTablet}
                  banners={bannerTablet} />
        
    </div>
  )
}

export default Tablet
