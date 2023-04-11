import React from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import EachProduct from './EachProduct';
import '../AdminOrder.scss'

const ModalCart = ({ showOrderDetail, setShowOrderDetail, data }) => {

    const handleClickOrderDetail = () => {
        setShowOrderDetail(false)
    }

  
  return (
    <Modal
            open={showOrderDetail}
            onClose={handleClickOrderDetail}
            classNames={{
                overlay: 'customOverlay',
                modal: 'custom-modal-detail-order',
            }}
        >

            <div className="bg-modal-cart">
                <h2 className='title'>Thông tin đơn hàng </h2>
                <div className='summary-infor-order'>
                    <ul style={{'width' : '20%', 'fontWeight' : 'bold'}}>
                        <li className='data-in-modal'>Mã đơn hàng</li>
                        <li className='data-in-modal '>Ngày đặt</li>
                        <li className='data-in-modal'>Trạng Thái</li>
                        <li className='data-in-modal'>Tổng giá</li>
                        <li className='data-in-modal'>Phone</li>
                    </ul>
                    <ul style={{'width' : '30%'}}>
                        <li className='data-in-modal'>#{data?._id.slice(0,7)}</li>
                        <li className='data-in-modal'>{data?.createAt}</li>
                        {
                            data?.status === 'PENDING' &&
                            <li className="data-in-modal status pending">{data?.status}</li>
                        }
                        {
                            data?.status === 'DONE' &&
                            <li className="data-in-modal status done">{data?.status}</li>
                        }
                        {
                            data?.status === 'CANCELLED' &&
                            <li className="data-in-modal status cancel">{data?.status}</li>
                        }
                        <li className='data-in-modal'>{data.totalPrice?.toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span></li>
                        <li className='data-in-modal'>{data?.phoneNo}</li>
                    </ul>
                    <ul style={{'width' : '20%','fontWeight' : 'bold'}}>
                        <li className='data-in-modal'>Thông tin khách hàng</li>
                        <li className='data-in-modal'>Địa chỉ nhận hàng</li>
                        <li className='data-in-modal'>Phương thức thanh toán</li>
                        <li className='data-in-modal'>Phí vận chuyển</li>
                        <li className='data-in-modal'>Ghi chú</li>
                    </ul>
                    <ul style={{'width' : '30%'}}>
                        <li className='data-in-modal'>{data?.name}</li>
                        <li className='data-in-modal'>{data?.address}</li>
                        <li className='data-in-modal'>{data?.payment}</li>
                        <li className='data-in-modal'>{data.shippingFee?.toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span></li>
                        <li className='data-in-modal'>{data?.note}</li>
                    </ul>
                </div>
                <div className='btn-group'>

                    <button className="detail btn" onClick={handleClickOrderDetail}>
                        {/* <i class="fas fa-eye"> </i> */}
                        <span>Đóng</span>
                    </button>
                  


                </div>
                <hr />
                <div>
                    <h2 className='title'>Chi tiết đơn hàng </h2>

                    <table >
                        <tr>
                            <th style={{'width': '25%'}}>Sản phẩm</th>
                            <th style={{'width': '50%'}}>Tên sản phẩm</th>
                            <th style={{'width': '15%'}}>Tạm tính</th>
                        </tr> 
                        {
                        data.orderItems.map(item => (
                            <EachProduct data={item} />
                        ))

                      
                        }
                         
                       
                    </table>

                   
                </div>
            </div>
        </Modal >

  )
}

export default ModalCart
