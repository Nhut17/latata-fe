import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import MainSub from '../components/SubComponents/MainSub'
import { bannerPhone, sliderPhone, sliderTablet } from '../components/Tablet/dataTablet'
const SubProduct = () => {

    const { listProduct } = useSelector(state => state.product)
    const dispatch = useDispatch()
    const { category, sub} = useParams()

    const listSub = listProduct.filter(val => val.subCate?.toLowerCase() == sub.toLocaleLowerCase())

    

    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
      })
      }, [])

  return (
    <div className='sub-product' >

            <MainSub list_product={listSub}
                 parentCate={`${category}`}
                 childCate={`${sub}`}
                 sliders={sliderPhone}
                 banners={bannerPhone} />
        
    </div>
  )
}

export default SubProduct
