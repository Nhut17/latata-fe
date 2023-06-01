import React, { useEffect } from 'react'
import { DeleteOutlined, SendOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { deleteVoucher, sendVoucher } from '../../../../redux/Admin/adminSlice'
import { ToastContainer, toast } from 'react-toastify'
const ItemVoucher = ({data}) => {

    const dispatch = useDispatch()
    const { successSendVoucher} = useSelector(state => state.admin)

    const dateStart = new Date(data.createAt)
    const dateExpire = new Date(data.expiredIn)

    const options = {
      timeZone: 'Asia/Bangkok',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };

    console.log('success: ' + successSendVoucher)

    useEffect(() => {

      if(successSendVoucher)
      {
          toast.success('Gửi voucher thành công!', {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
              theme: "light",
              });
        
            const time = setTimeout(() => {
              window.location.reload()
            },1500)
        
            return () => {
              clearTimeout(time)
            }
      }

  },[successSendVoucher])

    const handleSendVoucher = () => {
      dispatch(sendVoucher(data.voucher))
    }

    const handleDelete = () =>{
        dispatch(deleteVoucher(data._id))
    }

  return (
    <>
    <ToastContainer />
    <tr style={{textAlign: 'center', padding: '10px 0px'}}>
        <td >{data.voucher}</td>
        <td >{data.content}</td>
        <td >{data.sales}%</td>
        <td style={{
          width: '16%',
          padding: 10
        }} >{dateStart.toLocaleDateString('en-US',options)}</td>
        <td style={{
          width: '16%',
        }}>{dateExpire.toLocaleDateString('en-US',options)}</td>
         <td
                className="send-voucher"
                style={{cursor : 'pointer'}}
               
            >   <button style={{
              background: 'green',
              color : 'white',
              padding : '5px 10px',
              borderRadius: '20px'
            }}
              onClick={handleSendVoucher} >Gửi</button>
                
          </td>
        <td
                className="delete-brand"
                style={{cursor : 'pointer'}}
               
            >
                <DeleteOutlined onClick={handleDelete} />
          </td>
         
    </tr>
    </>
 
  )
}

export default ItemVoucher
