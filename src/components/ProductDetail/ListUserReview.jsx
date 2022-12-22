import React from 'react'
import StarRating from '../../components/StarRating'
const ListUserReview = ({data}) => {
  return (
    <div className="product-review-list flex">
                        <div className="review-detail flex">
                            <div className="review-avatar">
                                <img src={data?.avatar?.url} alt="" />
                            </div>
                            <div className="review-content">
                                <span>{data?.name}</span> <br />
                                <StarRating rating={data?.rating}/> <br />
                                <p className='time-review'>{data?.commentAt}</p>
                                <p className='content'>{data?.comment}</p>
                            </div>
                        </div>
                        
                   
                    </div>
  )
}

export default ListUserReview
