import React, {useEffect, useState} from "react";
import ReactDOM from 'react-dom';
import { useDispatch } from "react-redux";
import Modal from 'react-modal';
import ModalCart from "./ModalCart";
import { updateOrder } from "../../../../../redux/Order/orderSlice";
import { useNavigate } from "react-router-dom";



function Order({data}) {

  const dispatch =  useDispatch()
  const navigate = useNavigate()

  // confirm order
  const handleConfirm = () => {

    const confirm ={
      id: data._id,
      status: "DELIVERING"
    }

    dispatch(updateOrder(confirm))
  
  }


  // status delivering
  useEffect(() => {

    if(data.status === "DELIVERING"){

      const delivering = {
        id: data._id,
        status: "DONE"
      }

        const timer = setTimeout(() => {
          dispatch(updateOrder(delivering)) 
          // navigate(0)
        },10000)

        return () => {
          clearTimeout(timer)
        }

    }

  },[data.status])


  // cancel order
  const handleCancel = () =>{
    const confirm ={
      id: data._id,
      status: "CANCELLED"
    }

    dispatch(updateOrder(confirm))

  }

  // detail order 
  const handleClickOrderDetail = () => {
    setShowOrderDetail(true)
  }

  const [showOrderDetail, setShowOrderDetail] = useState(false)
  console.log('show order: ' + showOrderDetail )

  return (
    
    <React.Fragment>

    <tr>
    <td className="id-order">#{data._id.slice(0,7)}</td>
    <td className="product-name" >{data.name}</td>
    <td className="quantity">{data.quantity}</td>
    <td className="total-price"><span className="price-old">{data.totalPrice?.toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
      <span className='currency'>&#8363;</span></span></td>
    <td className="date-buy">{data.createAt}</td>
 
    {
      data.status === 'PENDING' &&
      <td><span className="status pending">{data.status}</span></td>
    }
    {
      data.status === 'DONE' &&
      <td><span className="status done">{data.status}</span></td>
    }
    {
      data.status === 'DELIVERING' &&
      <td><span className="status done" 
                style={{
                  backgroundColor: '#22A39F'
                }}  >{data.status}</span></td>
    }

    {
      data.status === 'CANCELLED' &&
      <td><span className="status cancel">{data.status}</span></td>
    }
    
    <td className="btn-group"
      style={{

      }} >
      <button className={data.status === 'PENDING' ? "confirm btn" : "confirm btn disable"}
        style={data.status === 'PENDING' ? {} : {
          cursor: 'not-allowed',
          opacity: 0.5
        }}
        disabled={data.status === 'PENDING' ? false : true}
        onClick={handleConfirm} >
  
        <span className="action done">Xác nhận đơn</span>
      </button>
      
      {/* <button className={data.status === 'PENDING' ? "cancel btn" : "cancel disable btn"} onClick={handleCancel}
      style={data.status === 'PENDING' ? {} : {
        cursor: 'not-allowed',
        opacity: 0.5
      }} >
 

        {/* <span className="action cancel"> Hủy đơn</span> */}
      {/* </button> */}

        {/* <span className="action cancel"> Hủy đơn</span> */}
      {/* </button>  */}


      <button className="detail btn" onClick={handleClickOrderDetail}
      >
        
        <span className="action view">Xem chi tiết</span>
        
        
      </button>
    </td>
  </tr>

  {

   showOrderDetail && 
    <ModalCart  showOrderDetail={showOrderDetail} 
    setShowOrderDetail={setShowOrderDetail} 
    data={data} />
    
  }
    </React.Fragment>
    
  );

}


export default Order;
