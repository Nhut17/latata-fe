import React from 'react'
import { useForm } from 'react-hook-form'
import './AdminVoucher.scss'
const AdminVoucher = () => {

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors }
    } = useForm()
    return (
        <div className="admin-voucher">
            <h4>Thêm mã giảm giá</h4>

            <form>

                <div className="input-group">
                    <span style={{width : '100px'}}>Mã giảm giá : </span>
                    <input {...register("id-voucher",{
                        required : true,
                        
                    })} />
                </div>
              
                <div className="input-group">
                    <span style={{width : '100px'}}>Nội dung : </span>
                    <input {...register("detail-voucher",{
                        required : true,
                        
                    })} />
                </div>
                <div className="input-group">
                    <span style={{width : '100px'}}>Số lượng : </span>
                    <input {...register("amound",{
                        required : true,
                        
                    })} />
                </div>

                <div className="flex">
                    <div className="input-group" style={{marginRight : '20px'}}>
                        <span  style={{width : '150px'}}>Ngày bắt đầu : </span>
                        <input type='date' {...register("date-start",{
                            required : true,
                            
                        })} />
                    </div>

                    <div className="input-group">
                        <span style={{width : '150px'}}>Ngày kết thúc: </span>
                        <input type='date' {...register("date-end",{
                            required : true,
                            
                        })} />
                    </div>
                </div>

                
                <div className="input-group">
                    <span style={{width : '100px'}}>Đối tượng: </span>
                    <input type='text' {...register("object",{
                        required : true,
                        
                    })} />
                </div>

       
                <div className="add-voucher">
                    <button>Thêm</button>

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