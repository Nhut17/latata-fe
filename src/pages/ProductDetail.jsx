import React from 'react'
import '../sass/productdetail/productdetail.scss'
import MainProductDetail from '../components/ProductDetail/MainProductDetail'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getProductDetail } from '../redux/Product/productSlice'

const ProductDetail = () => {

  const dispatch = useDispatch()
  const data = useSelector(state => state.product.productDetail)
  const { id } = useParams()

  useEffect(() => {
    dispatch(getProductDetail(id))  
  },[])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
  })
  }, [])

  return (
   <div className="main-product-detail">
    <div className="container">
      <MainProductDetail data={data}/>

    </div>
   </div>
  )
}

export default ProductDetail
