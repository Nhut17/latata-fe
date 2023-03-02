import React  from 'react'
import '../sass/productdetail/productdetail.scss'
import MainProductDetail from '../components/ProductDetail/MainProductDetail'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getProductDetail } from '../redux/Product/productSlice'
import { BeatLoader } from 'react-spinners'

const ProductDetail = () => {

  const dispatch = useDispatch()
  const data = useSelector(state => state.product.productDetail)
  const { id } = useParams()
  const { loading } = useSelector(state => state.product)

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
      {
        loading  ? (
          <div style={{
            display: loading ? 'flex' : 'none',
            height: '200px',
            alignItems: 'center',
            justifyContent: 'center',
          }} >
              <BeatLoader 
                  color='#000B49'
                  loading={loading}
             
                    />
            </div>
        ) : (
          <MainProductDetail data={data}/>
        )
      }
    </div>
   </div>
  )
}

export default ProductDetail
