import React from 'react'
import { Link } from 'react-router-dom'
import { line_strap} from './dataWatch'
const LineStrap = ({linestrap, listProduct,category,sub}) => {
  return (
    <div className="layout-line-strap">
      <div className='line-strap flex'>
      <div className="width-line-strap flex">
        <h4>Dây da đồng hồ</h4>
        {/* <ul className='flex'>
            <span>Bề rộng dây:</span>
            {linestrap.map(width => (
                <li className='blue'>{width}<span>mm</span></li>
            ))}
        </ul> */}
      </div>
      <Link 
        to={`/${category}/${sub}/5`} className="view-more blue">
            <span>Xem tất cả dây đồng hồ <i class="fas fa-caret-right"></i></span>
      </Link>
    </div>

      <div className="product-line-strap flex">
          {listProduct.map(item =>(
            <div className="product" style={{textAlign : 'center'}}>
              <img src={item?.images[0]?.url} alt="" />
              <p>{item.name}</p>
            </div>
          ))}
      </div>
    </div>

    
  )
}

export default LineStrap
