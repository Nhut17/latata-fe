import { React, useState ,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { updateOrder } from '../../redux/Order/orderSlice';
// import { cancelByUser } from '../../redux/reducer/orderSlice'

import EachTransaction from './EachTransaction'
const OrderList = ({ data }) => {

    const dispatch = useDispatch()
    const [evaluated, setEvaluated] = useState(
        data?.status === 'DONE' ? true : false
    )


    const cancelOrder = () => {
        const cancel = {
            id: data._id,
            status: 'CANCELLED'
        }

        dispatch(updateOrder(cancel))
    }


    return (
        <div className='order-detail'>
            

            
            {data?.status === 'DONE' &&
            <p className='summary-status-done'><i class="fa-solid fa-circle icon"></i> Giao hàng thành công</p>
            }
            {data?.status === 'PENDING' &&
            <p className='summary-status-pending'><i class="fa-solid fa-circle icon"></i> Chờ xác nhận</p>
            }
            {data?.status === 'CANCELLED' &&
            <p className='summary-status-cancel'><i class="fa-solid fa-circle icon"></i> Đơn hàng đã hủy</p>
            }



         {

            data.orderItems.map(orders => (

                <EachTransaction evaluated={evaluated}
                                orders={orders}
                                 />
            ))

            }
           

          
            <div className='summary-order flex j-between'>
                
                <p className='summary-address'>Địa chỉ:{data.address}</p>
                <p className='summary-date'>Ngày đặt: {data.createAt}</p>
                <p className='summary-phone'>Số điện thoại:{data.phoneNo}</p>
               

                <p className='summary-total-price'>Tổng tiền: {data.totalPrice.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span></p>
            </div>

           


            <div className="action flex ">

                {/* <div className='btn-action ' hidden={data?.status === 'PENDING' ? false : true}>
                    <button>Hủy đơn hàng </button>
            </div> */}

                {
                    data?.status === 'PENDING' &&
                    <div className='btn-action '
                    >
                   <button onClick={cancelOrder}>Hủy đơn hàng </button>
               </div>
                }
               


            



                

            </div>

            

            
         </div>
    )
}
export default OrderList