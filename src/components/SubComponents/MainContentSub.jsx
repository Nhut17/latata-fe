import React,{useState,useEffect} from 'react'
import BoxFilter from '../Tablet/BoxFilter'
import ListProduct from '../ListProduct'


const MainContentSub = ({list_product,childCate}) => {

    const [quantityShow,setQuantityShow] = useState(5)
    const [totalQuantityShow,setTotalQuantityShow] = useState(0)
    

    useEffect(() => {

        setTotalQuantityShow(list_product?.length - quantityShow)

    },[list_product])
    

    const handleShowMore = () => {
        setQuantityShow( prev => prev + 5)
        setTotalQuantityShow(prev => prev - 5)
    }


    return (
    <div className='main-content-sub'>
       <div className="container">
        <BoxFilter totalQuantity={list_product?.length} childCate={childCate} />

        <ListProduct  list_product={list_product} quantity={quantityShow} />

        {
            totalQuantityShow <=0  ? ('') :  <button onClick={handleShowMore}>Xem thêm {totalQuantityShow} {childCate}</button>
            
           
        }

       </div>
    </div>
  )
}

export default MainContentSub
