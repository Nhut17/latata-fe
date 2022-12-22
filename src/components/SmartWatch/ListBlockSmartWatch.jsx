import React from 'react'
import { useContext } from 'react'
import BlockItemProduct from '../SubComponents/BlockItemProduct'
import { SmartWatchContext } from '../../context/smartWatchContext'


const ListBlockSmartWatch = ({listProduct}) => {

    const context = useContext(SmartWatchContext)

    const subProduct = (list_product, sub) => {
      return list_product?.filter(val => val.subCate?.toLowerCase().includes(sub.toLowerCase()))
  }

  return (
    <>

    <BlockItemProduct 
        banner={context.banner_block_product_smart_watch.banner_fashion}
        linkTo={'/'}
        menuTop={context.menu_fashion}
        title={'Thời trang sành điệu'}
        listProduct={subProduct(listProduct,'Thời trang sành điệu')}
        category={'Smartwatch'}
         />
    <BlockItemProduct 
        banner={context.banner_block_product_smart_watch.banner_utility}
        linkTo={'/'}
        menuTop={context.menu_utility}
        title={'Đa tiện ích'}
        listProduct={subProduct(listProduct,'Đa tiện ích')}
        category={'Smartwatch'}
         />
    <BlockItemProduct 
        banner={context.banner_block_product_smart_watch.banner_sport}
        linkTo={'/'}
        menuTop={context.menu_sport}
        title={'Thể thao chuyên nghiệp'}
        listProduct={subProduct(listProduct,'Thể thao chuyên nghiệp')}
        category={'Smartwatch'}
         />
    <BlockItemProduct 
        banner={context.banner_block_product_smart_watch.banner_children}
        linkTo={'/'}
        menuTop={[]}
        title={'Đồng hành cùng bé'}
        listProduct={subProduct(listProduct,'Đồng hành cùng bé')}
        category={'Smartwatch'}
         />
    <BlockItemProduct 
        banner={context.banner_block_product_smart_watch.banner_watch_chain}
        linkTo={'/'}
        menuTop={context.menu_watch_chain}
        title={'Dây đồng hồ'}
        listProduct={subProduct(listProduct,'Dây đồng hồ')}
        category={'Smartwatch'}
         />

    </>
  )
}

export default ListBlockSmartWatch