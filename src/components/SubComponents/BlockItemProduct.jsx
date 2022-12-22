import React from 'react'
import MenuTopBlock from './MenuTopBlock'
import ListProduct from '../ListProduct'
import { Link } from 'react-router-dom'
import '../../sass/BlockProduct/blockItemProduct.scss'
import { useSelector } from 'react-redux'

const BlockItemProduct = ({banner,menuTop,linkTo,title,listProduct,category}) => {

  const { listCate } = useSelector(state => state.category)

  const cate = listCate.filter(val => val.name?.toLowerCase() === category?.toLowerCase())

  const id = cate[0]?._id

  return (
    <div className='block-item-product'>
        <div className="banner">
            <img src={banner} alt="" />
        </div>

        {/* {
          menuTop.length > 0 &&
          <MenuTopBlock menuTop={menuTop} />

        } */}

        <ListProduct quantity={10}
                      list_product={listProduct} />

        
        {
          title !== 'Phụ kiện gaming' &&
        <button className='btnViewMore'><Link to={`/${category}/${title}/${id}`}>XEM TẤT CẢ CÁC {title?.toUpperCase()} CHÍNH HÃNG</Link></button>
        }

    </div>
  )
}

export default BlockItemProduct