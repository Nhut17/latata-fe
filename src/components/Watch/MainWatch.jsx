import React, { useEffect } from 'react'
import { useContext } from 'react'
import { WatchContext } from '../../context/watchContext'
import TopSlider from '../Tablet/TopSlider'
import WatchTypes from './WatchTypes'
import CollectionWatch from './CollectionWatch'
import LineStrap from './LineStrap'
import { useDispatch, useSelector } from 'react-redux'
import { getProductCate, resetListCate } from '../../redux/Product/productSlice'
import { useParams } from 'react-router-dom'
const MainWatch = () => {
    const context = useContext(WatchContext)

    const {listProduct} = useSelector(state => state.product)
    const dispatch = useDispatch()
    const {id} = useParams()
    useEffect(() => {
      dispatch(resetListCate())
      dispatch(getProductCate(id))
    },[])

    const subProduct = (list_product, sub) => {
      return list_product?.filter(val => val.subCate?.toLowerCase().includes(sub.toLowerCase()))
  }

  return (
    
    <div className='main-watch'>
      <div className="container">
        <TopSlider  sliders={context.sliderWatch} 
                    banners={context.bannerWatch}/>
        <CollectionWatch/>

        <div className="wt-for-men wt-border">
            <WatchTypes 
                listType={context.WatchCategories}
                idType={context.WatchCategories[2].id}
                listProduct= {subProduct(listProduct,'Đồng hồ nam')}
                
              />
          </div>

          <div className="wt-for-women wt-border">
            <WatchTypes 
                listType={context.WatchCategories}
                idType={context.WatchCategories[3].id}
                listProduct= {subProduct(listProduct,'Đồng hồ nữ')}

              />
          </div>

          <div className="wt-for-couple wt-border">
            <WatchTypes 
                listType={context.WatchCategories}
                idType={context.WatchCategories[4].id}
                listProduct= {subProduct(listProduct,'Đồng hồ cặp đôi')}
    
              />
          </div>

          <div className="wt-for-children wt-border">
            <WatchTypes 
                listType={context.WatchCategories}
                idType={context.WatchCategories[5].id}
                listProduct= {subProduct(listProduct,'Đồng hồ trẻ em')}
        
              />
          </div>

          <LineStrap linestrap={context.width_line_strap}
                     listProduct={subProduct(listProduct,'Dây đồng hồ')}
                     category={'Đồng hồ'}
                     sub={'Dây đồng hồ'} />
      </div>
    </div>
  )
}

export default MainWatch
