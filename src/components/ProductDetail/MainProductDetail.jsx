import React from 'react'
import StarRating from '../StarRating'
import FeedBack from './FeedBack'
import Information from './Information'
import Introduce from './Introduce'
const MainProductDetail = ({data}) => {
  return (
    <div className='product-detail'>
      <div className="product-category">
            <span className="product-category-title ">
                Phụ kiện
            </span>
            <span className="product-category-title">
            <i className="fa-solid fa-angle-right"></i>
            </span>
            <span className="product-category-title">
           {data.category}
            </span>
      </div>
      
      <div className="product-title flex a-center bd-bottom">
      <h2 className="product-title-name">{data.name}</h2>
        <div className="product-title-star">
            <StarRating rating={data.ratings} />
        </div>

        <span className="product-title-review">{data.numOfReviews} đánh giá</span>
        
      </div>

      
      <Introduce data={data} />
      <Information data={data} />
      <FeedBack data={data} />
    </div>
  )
}

export default MainProductDetail
