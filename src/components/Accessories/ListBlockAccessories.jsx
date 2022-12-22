import React,{useContext, useState} from 'react'
import BlockItemProduct from '../SubComponents/BlockItemProduct'
import { AccessoryContext } from '../../context/accessoryContext'

const ListBlockAccessories = ({listProduct}) => {

    const context = useContext(AccessoryContext)

    const subProduct = (list_product, sub) => {
        return list_product?.filter(val => val.subCate?.toLowerCase().includes(sub.toLowerCase()))
    }

    // const mouseGaming = subProduct(listProduct,'Chuột máy tính')
    const [mouseGaming,setMouseGaming] = useState(subProduct(listProduct,'Chuột máy tính'))
    const [listKey,setListKey] = useState(subProduct(listProduct,'Bàn phím'))
  

    const listGaming = [...listKey , ...mouseGaming]

  return (
    <>

            <BlockItemProduct 
                banner={context.banner_block_product.banner_block_apple}
                linkTo={'/'}
                menuTop={context.menu_apple_accessories}
                title={'Phụ kiện apple'}
                listProduct={subProduct(listProduct,'Phụ kiện apple')}
                category={'Phụ kiện'}
            />

            <BlockItemProduct 
                banner={context.banner_block_product.banner_block_battery}
                linkTo={'/'}
                menuTop={context.menu_battery}
                title={'Sạc dự phòng'}
                listProduct={subProduct(listProduct,'Sạc dự phòng')}
                category={'Phụ kiện'}
            />
            <BlockItemProduct 
                banner={context.banner_block_product.banner_block_chargeCable}
                linkTo={'/'}
                menuTop={context.menu_chargeCable}
                title={'Sạc cáp'}
                listProduct={subProduct(listProduct,'Sạc cáp')}
                category={'Phụ kiện'}
            />
            <BlockItemProduct 
                banner={context.banner_block_product.banner_block_headphone}
                linkTo={'/'}
                menuTop={context.menu_headphone}
                title={'Tai nghe'}
                listProduct={subProduct(listProduct,'Tai nghe')}
                category={'Phụ kiện'}
            />
            <BlockItemProduct 
                banner={context.banner_block_product.banner_block_speaker}
                linkTo={'/'}
                menuTop={context.menu_speaker}
                title={'Loa'}
                listProduct={subProduct(listProduct,'Loa')}
                category={'Phụ kiện'}
            />
            <BlockItemProduct 
                banner={context.banner_block_product.banner_block_smartHome}
                linkTo={'/'}
                menuTop={context.menu_smartHome}
                title={'Thiết nhà bị thông minh'}
                listProduct={subProduct(listProduct,'Thiết nhà bị thông minh')}
                category={'Phụ kiện'}
            />
            <BlockItemProduct 
                banner={context.banner_block_product.banner_block_gaming}
                linkTo={'/'}
                menuTop={context.menu_gaming}
                title={'Phụ kiện gaming'}
                listProduct={listGaming}
                category={'Phụ kiện'}
            />

    </>
  )
}

export default ListBlockAccessories