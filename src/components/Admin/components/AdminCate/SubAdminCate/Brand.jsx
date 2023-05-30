import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import preImage from '../../../../../assets/images/preImage.png'
import { useDispatch, useSelector } from 'react-redux'
import { toast , ToastContainer} from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { getBrand, uploadLogo } from '../../../../../redux/Admin/adminSlice'
import BrandItem from './BrandItem'
const Brand = () => {

    const navigate = useNavigate()

    const [previewImg,setPreviewImg] = useState(preImage)
    const [selectImage,setSelectImage] = useState('')
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors }
    } = useForm()

    const { listBrand, successUploadBrand } = useSelector(state => state.admin)
   
    console.log( 'listbarnbd' + listBrand)


    const dispatch = useDispatch()
    // handle review previous image
    const handleImage = (e) => {
        const reader = new FileReader();
    
        reader.onload = () => {
          if(reader.readyState === 2){
            setPreviewImg(reader.result)
            setSelectImage(reader.result)
          }
        }
        reader.readAsDataURL(e.target.files[0])
      }

    // handle submit 
    const handleOnSubmit = (formData) => {
        const { name } = formData
        const data = new FormData()

        console.log(name)
        data.set('name',name)
        data.set('logo',selectImage)

        dispatch(uploadLogo(data))
        
    }

    useEffect(()=> {
        dispatch(getBrand())
    })

    // handle toast success add brand
    useEffect(() => {
        if(successUploadBrand){
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
      },[successUploadBrand])

 
    return (
            <div className="box-brand">
                <ToastContainer />
                <h4>Thêm thương hiệu</h4>

                <form style={{marginLeft : '20px'}}
                        onSubmit={handleSubmit(handleOnSubmit)} >

                    <div className="input-group">
                        <span style={{width : '100px'}}>Tên hãng : </span>
                        <input  {...register("name",{
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
                        onChange={handleImage}
                        accept="images/*"
                        />
                        
                        </div>
                    </div>

                    <div className="add-brand">
                        <button type='submit'>Thêm</button>

                    </div>

                </form>

                <div className="list-brand">
                <p>Danh sách hãng</p>
                <table>
                        <tr style={{textAlign: 'center'}}>
                            <th>Tên hãng</th>
                            <th>Hình ảnh</th>

                        </tr>

                        {
                            listBrand.map((data) => (
                                <BrandItem data={data}/>
                            ))
                        }
                        
                </table>
                </div>
            </div>
    
    )
}



export default Brand