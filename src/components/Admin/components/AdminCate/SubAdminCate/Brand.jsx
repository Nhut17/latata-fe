import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import preImage from '../../../../../assets/images/preImage.png'
const Brand = () => {

    const [previewImg,setPreviewImg] = useState(preImage)
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors }
    } = useForm()



    const BrandItem = () => {
        return(
            <tr>
                <td>hãng</td>
                <td>ảnh</td>
                <td
                    className="delete-brand"
                >
                    <DeleteOutlined />
                </td>
                <td className="update-brand">
                    <EditOutlined/>
                </td>
            </tr>
        )
    }
    return (
    
            <div className="box-brand">
                <h4>Thêm thương hiệu</h4>

                <form style={{marginLeft : '20px'}}>

                    <div className="input-group">
                        <span style={{width : '100px'}}>Tên hãng : </span>
                        <input  {...register("brand",{
                            required : true,
                            
                        })} />
                    </div>
                    
                    <div className="img-group flex ">
                        <span style={{width: '100px'}}>Hình ảnh : </span>
                  
                        <div class="image-upload">
                        <label for="file-input">

                            
                            <div class="upload-icon">
                                <img src={previewImg} alt="" 
                            
                            />
                            </div>
                        </label>
                        <input id="file-input" type="file"
                        {...register("images")}
                        accept="images/*"
                        />
                        
                        </div>
                    </div>

                    <div className="add-brand">
                        <button>Thêm</button>

                    </div>

                </form>

                <div className="list-brand">
                <p>Danh sách hãng</p>
                <table>
                        <tr>
                            <th>Tên hãng</th>
                            <th>Hình ảnh</th>

                        </tr>

                        <BrandItem/>
                        
                </table>
                </div>
            </div>
    
    )
}



export default Brand