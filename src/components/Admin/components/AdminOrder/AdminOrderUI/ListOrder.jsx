import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrder } from '../../../../../redux/Order/orderSlice';
import Order from './Order';
import { FolderOpenOutlined } from '@ant-design/icons';


function ListOrder({status}) {

    const { listOrder } = useSelector(state => state.order)
    
    const statusOrder = listOrder.filter(listOrder => listOrder.status == `${status}`)

    console.log('status ')

   
    


   

    const dispatch = useDispatch()
    
    useEffect(() => {

        dispatch(getAllOrder())
        
    },[])

    return (
       <div className="all-order">
       <table>
       <tr>
           <th style={{ width: '10%' }}>Mã đơn</th>
           <th style={{ width: '15%' }}>Tên khách hàng</th>
           <th style={{ width: '12%' }}>Số lượng sản phẩm</th>
           <th style={{ width: '13%' }}>Tổng tiền</th>
           <th style={{ width: '12%' }}>Ngày mua</th>
           <th style={{ width: '10%' }}>Trạng thái</th>
           <th>Actions</th>
       </tr>

       {
        statusOrder &&
            
        
        statusOrder.map((data) => (

            <Order data={data} />

        ))

        
    }



   </table>
       </div>
    );
}

export default ListOrder;