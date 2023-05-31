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

    const [dateStart, setDateStart] = useState(new Date())
    const [dateExpired, setDateExpired] = useState()
    const [textError,setTextError] = useState('')

    

    const dispatch = useDispatch()
    const { vouchers, successAdd, errorAdd } = useSelector(state => state.admin)

    const handleAddVoucher = (formData) => {
        if(dateExpired?.getTime() - dateStart?.getTime() < 3600000)
        {
            return
           
        }
        
        if(dateStart && dateExpired) {

            
            const data ={
                voucher: formData.voucher.toUpperCase(),
                sales: parseInt(formData.sales),
                content: formData.content,
                createAt: dateStart,
                expiredIn: dateExpired
            }
          
            console.log(data)
            
            dispatch(addVoucher(data))
            
            }
          
               
            
    }

    useEffect(() => {
        if(dateExpired?.getTime() - dateStart?.getTime() < 3600000)
        {
            setTextError('Thời gian hết hạn voucher phải chênh nhau 1 giờ với thời gian bắt đầu'
            )
           
        }
        else{
            setTextError('')
           
        }
    },[dateStart,dateExpired])

    // console.log(errorInput)

    // add voucher successfull
    useEffect(() => {

        if(successAdd)
        {
            toast.success('Thêm sản thương hiệu!', {
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

    },[successAdd])

    return (
        <div className="admin-voucher">
            <ToastContainer />
            <h4>Thêm mã giảm giá</h4>

            <form onSubmit={handleSubmit(handleAddVoucher)}>

                <div className="input-group">

                    <span style={{width : '150px'}}>Mã giảm giá : </span>
                    <input 
                        style={{
                            textTransform: 'uppercase'
                        }}
                    {...register("voucher",{
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

                    <span style={{width : '150px'}}>Giảm giá : </span>
                    <input type='number' max={99} min={1} {...register("sales",{
                        required : true,
                        
                    })} />
                </div>

                    <div className="input-group from-date" style={{marginRight : '20px'}}>
                        <span  style={{width : '150px'}}>Ngày bắt đầu : </span>
                       


                        <div className="input-from-date">
                        <DatePicker 
                            selected={dateStart}
                            onChange={(date) => {
                                setDateStart(date);
                            }}
                            dateFormat="dd-MM-yyyy hh:mm aa"
                            timeFormat="HH:mm"
                            showTimeSelect
                            timeCaption="time"
                            placeholderText='Ngày bắt đầu'
                            locale='vi'
                            minDate={new Date()}
                            />   
                              
                        </div>             

                          

                    </div>

                    <div className="input-group to-date">
                        <span style={{width : '150px'}}>Ngày kết thúc: </span>
                     
                        <div className="input-to-date">

                            <DatePicker 

                                selected={dateExpired}
                                onChange={(date) => {
                                    setDateExpired(date);
                                }}
                                showTimeSelect
                                dateFormat="dd-MM-yyyy hh:mm aa"
                                timeFormat="HH:mm"
                                timeCaption="time"
                                placeholderText='Ngày kết thúc'
                                locale='vi'
                                minDate={dateStart}

                                />  
                        </div> 


                    </div>
                {
                    textError && <span style={{
                        fontSize: 14,
                        color : 'red'
                    }}>*{textError}</span>
                }
          
              {
                (errors.voucher?.type==='required' || errors.content?.type==='required' || errors.sales?.type==='required' || (!dateStart && !dateExpired) ) &&   <span style={{
                    fontSize: 14,
                    color : 'red'
                }}>*Mời bạn nhập đầy đủ thông tin</span>
              }

                <div className="add-voucher">
                    <button type='submit'
                            >Thêm</button>

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