import React, { useState } from 'react'
import DatePicker from "react-datepicker";  
import "react-datepicker/dist/react-datepicker.css"; 
import { useForm } from 'react-hook-form'
import './AdminVoucher.scss'
import { useDispatch, useSelector } from 'react-redux';
const AdminVoucher = () => {

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors }
    } = useForm()

    const [dateStart, setDateStart] = useState()
    const [dateExpired, setDateExpired] = useState()

    // console.log('dateStart', dateStart)
    // console.log('dateExpired', dateExpired)

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
            console.log(data)

        
            }

    }

    return (
        <div className="admin-voucher">
            <h4>Thêm mã giảm giá</h4>

            <form onSubmit={handleSubmit(handleAddVoucher)}>

                <div className="input-group">

                    <span style={{width : '150px'}}>Mã giảm giá : </span>
                    <input {...register("voucher",{
                        required : true,
                        
                    })} />
                </div>
              
                <div className="input-group">

                    <span style={{width : '150px'}}>Nội dung : </span>
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

                    <div className="input-group from-date" style={{marginRight : '20px'}}>
                        <span  style={{width : '150px'}}>Ngày bắt đầu : </span>
                        {/* <input type='date' {...register("date-start",{
                            required : true,
                            
                        })} /> */}


                        <div className="input-from-date">
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

                          

                    </div>

                    <div className="input-group to-date">
                        <span style={{width : '150px'}}>Ngày kết thúc: </span>
                        {/* <input type='date' {...register("date-end",{
                            required : true,
                            
                        })} /> */}



                    <div className="input-to-date">
                        <DatePicker
                            selected={dateExpired}
                            onChange={(date) => {
                                setDateExpired(date);
                            }}
                            dateFormat='dd-MM-yyyy'
                            placeholderText='Ngày bắt đầu'
                            locale='vi'
                            maxDate={new Date()}
                            />  
                    </div>  

                       

                    </div>
          

                

                <div className="select-object flex">
                    <span style={{width : '150px'}}>Đối tượng: </span>
                    {/* <input type='text' {...register("object",{
                        required : true,
                        
                    })} /> */}

                    <select name="" id="" style={{width : '182px'}}>
                        <option >
                            Tất cả
                        </option>
                        <option value="">Top 10</option>
                    </select>
                </div>

                <div className="add-voucher">
                    <button type='submit'>Thêm</button>

                </div>

            </form>

            <div className="list-brand">
            <p>Danh sách mã giảm giá</p>
            <table>
                    <tr>
                        <th>Mã giảm giá</th>
                        <th>Nội dung</th>
                        <th>Thời gian</th>
                        <th>Đối tượng</th>

                    </tr>

                    {/* <BrandItem/> */}
                    
            </table>
            </div>
        </div>
    )
}

export default AdminVoucher