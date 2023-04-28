import React, { useEffect, useState } from 'react'
import { feature_list_cate } from '../data'
import { Link } from 'react-router-dom'
import { getElements } from 'dropzone'


const FeaturedListCate = () => {

  const [visible,setVisible] = useState(false)
  const bgAccessory = () => {
    if(window.scrollY > 375)
    {
      setVisible(true)
    }
    else{
      setVisible(false)
    }
  }

  window.addEventListener('scroll', bgAccessory)
  return (
    <div className='feature-list-cate '>
        <h2>PHỤ KIỆN NỔI BẬT</h2>
        <div className={visible ? "wrapper-group-cate bg-cate-accessory" : "wrapper-group-cate"}>
                {feature_list_cate.map((cate,index) => (
                    <div className="wrapper"  key={index}>
                        
                            <div className="img-wrapper">
                              <img src={cate.url} alt={cate.title} className={cate.name} />
                            </div>
                            <p className="content">
                              <span>{cate.title}</span>
                            </p>
                        
                    </div>
                ))}
            </div>
    </div>
  )
}

export default FeaturedListCate