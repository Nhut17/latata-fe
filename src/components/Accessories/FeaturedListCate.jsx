import React from 'react'
import { feature_list_cate } from '../data'
import { Link } from 'react-router-dom'


const FeaturedListCate = () => {
  return (
    <div className='feature-list-cate'>
        <h2>PHỤ KIỆN NỔI BẬT</h2>
        <div className="wrapper-group-cate">
                {feature_list_cate.map((cate,index) => (
                    <div className="wrapper"  key={index}>
                        
                            <img src={cate.url} alt={cate.title} className={cate.name} />
                            <p className="content">{cate.title}</p>
                        
                    </div>
                ))}
            </div>
    </div>
  )
}

export default FeaturedListCate