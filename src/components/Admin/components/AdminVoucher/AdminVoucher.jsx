import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";  
import "react-datepicker/dist/react-datepicker.css"; 
import { useForm } from 'react-hook-form'
import './AdminVoucher.scss'
import { useDispatch, useSelector } from 'react-redux';
import { addVoucher } from '../../../../redux/Admin/adminSlice';
import { toast , ToastContainer} from 'react-toastify'
import VoucherTable from './VoucherTable';
const AdminVoucher = () => {

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors }
    } = useForm()

    const [dateStart, setDateStart] = useState()
    const [dateExpired, setDateExpired] = useState()

    

    const dispatch = useDispatch()
    const { vouchers, successAdd, errorAdd } = useSelector(state => state.admin)

    const handleAddVoucher = (formData) => {

        
        if(dateStart && dateExpired) {

            
            const data ={
                voucher: formData.voucher,
                sale: formData.sales,
                content: formData.content,
                createAt: dateStart,
                expiredIn: dateExpired
            }
          
            dispatch(addVoucher(data))
        
            }

    }

    useEffect(() => {

        if(successAdd)
        {
            toast.success('Thêm sản thương hiệu!', {
                position: "top-right",
                autoClose: 500,
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

    },[successAdd])

    return (
        <div className="admin-voucher">
            <ToastContainer />
            <h4>Thêm mã giảm giá</h4>

            <form onSubmit={handleSubmit(handleAddVoucher)}>

                <div className="input-group">
                    <span style={{width : '100px'}}>Mã giảm giá : </span>
                    <input {...register("voucher",{
                        required : true,
                        
                    })} />
                </div>
              
                <div className="input-group">
                    <span style={{width : '100px'}}>Nội dung : </span>
                    <input {...register("content",{
                        required : true,
                        
                    })} />
                </div>
                <div className="input-group">
                    <span style={{width : '100px'}}>Giảm giá : </span>
                    <input type='number' {...register("sales",{
                        required : true,
                        
                    })} />
                </div>

                <div className="flex">
                    <div className="input-group from-date" style={{marginRight : '20px'}}>
                        <span  style={{width : '150px'}}>Ngày bắt đầu : </span>
                        {/* <input type='date' {...register("date-start",{
                            required : true,
                            
                        })} /> */}

                <DatePicker
                    selected={dateStart}
                    onChange={(date) => {
                        setDateStart(date);
                    }}
                    dateFormat='dd-MM-yyyy'
                    placeholderText='Ngày bắt đầu'
                    locale='vi'
                    maxDate={new Date()}
                    />              
                    </div>

                    <div className="input-group to-date">
                        <span style={{width : '150px'}}>Ngày kết thúc: </span>
                        {/* <input type='date' {...register("date-end",{
                            required : true,
                            
                        })} /> */}


                    <DatePicker
                        selected={dateExpired}
                        onChange={(date) => {
                            setDateExpired(date);
                        }}
                        dateFormat='dd-MM-yyyy'
                        placeholderText='Ngày kết thúc'
                        locale='vi'
                 
                        minDate={dateStart}
                        />     
                    </div>
                </div>

                
                {/* <div className="input-group">
                    <span style={{width : '100px'}}>Đối tượng: </span>
                    <input type='text' {...register("object",{
                        required : true,
                        
                    })} />
                </div> */}

       
                <div className="add-voucher">
                    <button type='submit'>Thêm</button>

                </div>

            </form>

            <div className="list-brand">
            <p>Danh sách mã giảm giá</p>
            
                <VoucherTable />
            
            </div>
        </div>
    )
}

export default AdminVoucher