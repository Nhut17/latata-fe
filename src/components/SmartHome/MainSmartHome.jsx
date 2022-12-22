import React, {useContext, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SmartHomeContext } from '../../context/smartHomeContext'
import { getProductCate, resetListCate } from '../../redux/Product/productSlice';
import BlockItemProduct from '../SubComponents/BlockItemProduct';
import TopSlider from '../Tablet/TopSlider';
const MainSmartHome = () => {

    const context = useContext(SmartHomeContext);
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
        <div className='main-smarthome'>
            <div className="container">
                <TopSlider sliders={context.sliderTablet} banners={context.bannerTablet} />

                <BlockItemProduct 
                    banner={context.banner_block_product.banner_block_healthycare}
                    linkTo={'/'}
                    menuTop={context.menu_healthycare}
                    title={'Chăm sóc sức khỏe'}
                    listProduct={subProduct(listProduct,'Chăm sóc sức khỏe')}
                    category={'Chăm sóc sức khỏe'}
                />

                <BlockItemProduct 
                    banner={context.banner_block_product.banner_block_home}
                    linkTo={'/'}
                    menuTop={context.menu_home}
                    title={'Gia dụng thông minh'}
                    listProduct={subProduct(listProduct,'Gia dụng thông minh')}
                    category={'Phụ kiện'}
                />

            </div>
        </div>
    )
}

export default MainSmartHome
