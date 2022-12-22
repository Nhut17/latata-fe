import React from 'react'
import { Link } from 'react-router-dom'
import '../sass/login/login.scss'
const Thankyou = () => {
  return (
    <div className='bg-thanks'>
        <div className="container" style={{textAlign: 'center'}}>
          <div className="bg-image">
              <img src="https://res.cloudinary.com/dx8xengfd/image/upload/v1670812611/products/2364d0101d34848fc9284b36f49ef7d5_tsv085.png" alt="" />
            
              
          </div>
            <Link to='/'> <button>VỀ TRANG CHỦ</button></Link>
        </div>
    </div>
  )
}

export default Thankyou
