import React, {useState, useEffect} from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { editCurrentPage, paginationProduct } from '../../../../actions/ProductAction';
import Product from './Product';


function ListProduct({listProduct}) {
    const [quantityShow,setQuantityShow] = useState(40)
    const [totalQuantityShow,setTotalQuantityShow] = useState(0)

    const handleShowMore = () => {
        setQuantityShow( prev => prev + 10)
        setTotalQuantityShow(prev => prev - 10)
    }

    useEffect(() => {

        setTotalQuantityShow(listProduct.length - quantityShow)

    },[listProduct])

    return (
       <div className="admin-product-list">
           <table>
                <tr>
                    <th>STT</th>
                    <th>Hình ảnh</th>
                    <th>Tên</th>
                    <th>Giá</th>
                    <th>Danh mục</th>
               
                    <th>Giảm giá</th>
                    <th>Hàng tồn</th>

                </tr>
                {
                    listProduct &&
                    listProduct.slice(0,quantityShow).map((data, index) => (
                        <Product data={data} stt={index} />
                    ))
                }

                
            </table>

            <div className="btn-see-more">
                {
                
                totalQuantityShow <=0  ? ('') :  <button onClick={handleShowMore}>Xem thêm {totalQuantityShow} sản phẩm</button>
            
                }
                </div>
            
          

       </div>
    )
}

export default ListProduct;