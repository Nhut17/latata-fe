import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { createProduct, resetActionAdmin } from "../../../../redux/Admin/adminSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import preImage from '../../../../assets/images/preImage.png'
import {PlusOutlined} from "@ant-design/icons";
import InfoTechProduct from "./SelectDetailProduct/InfoTechProduct";


function AdminCreate(props) {
  const { listCate } = useSelector(state => state.category)

  
    const {
      register,
      handleSubmit,
      getValues,
      formState: { errors }
    } = useForm()

  const [selectImage,setSelectImage] = useState('')
  const [previewImg,setPreviewImg] = useState(preImage)
  const [subCategories,setSubCategories] = useState('')



  const { successCreate ,successUpdate} = useSelector(state => state.admin)


  const dispatch = useDispatch()
  const navigate = useNavigate()


  useEffect(() => {
    if(successCreate){
      toast.success('Thêm sản phẩm thành công', {
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
      navigate('/admin')
    },1500)

    return () => {
      clearTimeout(time)
    }

    }
  },[successCreate])

  

  // useEffect(() => {
  //   dispatch(resetActionAdmin())
  //   console.log('reset')
  // },[])
  
// hanlde up image
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

 const findSubCate = listCate.findIndex(item => item.name == subCategories)
 const listSubCate = listCate[findSubCate]?.sub_category?.length

  // create product
  const handleOnSubmit = (formData) => {

      
    const { name,category,price,promotion,stock, description, subCate } = formData


    const dataS= new FormData()
    dataS.set('name', name)
    dataS.set('price', price)
    dataS.set('promotion', promotion)
    dataS.set('description', description)
    dataS.set('images', selectImage)
    dataS.set('category', category)
    dataS.set('subCate', subCate)
    dataS.set('stock', stock)

    // delete
    delete formData.name
    delete formData.category
    delete formData.price
    delete formData.promotion
    delete formData.stock
    delete formData.description
    delete formData.subCate
    delete formData.images

   
    // set info tech
    let info_tech =[]

    for (var prop in formData) {

      info_tech.push({
        title: prop,
        content: formData[prop]
      })

      }
    dataS.set('info_tech', info_tech)
   

    // dispatch(createProduct(dataS))



  }
  
  const handleSelect = (e) => {

    setSubCategories(e.target.value)
  }

  return (
    <div className="admin-create">
      <ToastContainer />
      <span>Create Product</span>
      <form
        className="admin-create-product"
        onSubmit={handleSubmit(handleOnSubmit)}
        encType='multipart/form-data'
      >
        <div className="input-group">
          <p className="title">Tên sản phẩm</p>
       
          <input {...register("name",{
            required : true,
            

          })} />

          {
            errors.name?.type === 'required' &&
            <span className='err-msg'>Mời bạn nhập Tên sản phẩm</span> 
          }
        </div>

        <div className="input-group">
          <p className="title">Danh mục</p>
         
          <select
            className="cate-select"
            {...register('category', {
              required: true,
              onChange: handleSelect
            })}  >
            {listCate.map(item => (  
                <option value={item?.name}  >{item?.name}</option>
            ))}
          </select>
        </div>

              {
                listSubCate > 0 &&
                  <div className="input-group">
                        <p className="title">Danh mục con</p>
                      
                        <select
                          className="cate-select"
                          {...register('subCate', {
                            required: true,
                          })}  >
                          {listCate[findSubCate].sub_category.map(item => (
                            <option value={item}>{item}</option>
                          ))}
                        </select>        

                </div>  
              }
              
        <InfoTechProduct id_cate={'637e40260f52ec2c4eb8180b'}
                          register={register}
                           />

        <div className="input-group">
          <span className="title">Giá</span>
          <input
            {...register("price",{
              required : true
            })}
            placeholder=""
            type="number"
          />

          {
            errors.price?.type === 'required' &&
            <span className='err-msg'>Mời bạn nhập giá sản phẩm</span> 
          }
        </div>

        <div className="input-group">
          <span className="title">Giảm giá</span>
          <input {...register("promotion",{
            required : true,
            maxPromotion : (val) => parseFloat(val) >= 100
           
          })} placeholder="" type="number" />

          {
            errors.promotion?.type === 'required' &&
            <span className='err-msg'>Mời bạn nhập giảm giá sản phẩm</span> 
          }       

          {
            errors.promotion  && errors.promotion?.type === 'maxPromotion' &&
            <span className='err-msg'>Giảm giá vượt giới hạn</span> 
          }       
               
        </div>

        <div className="input-group">
          <span className="title">Số lượng</span>
          <input {...register("stock",{
            required : true
          })} placeholder="" type="number" />

          {
            errors.stock?.type === 'required' &&
            <span className='err-msg'>Mời bạn nhập số lượng sản phẩm</span> 
          } 
        </div>

        <span>Hình ảnh</span>

        <div className="img-group flex ">
          <form>
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
          </form>

        
        </div>

          <div className="input-group">
            <span className="title">Chi tiết sản phẩm</span>
            <textarea name="" id="" cols="30" rows="10" 
              {...register('description')} ></textarea>
          </div>

        <button type="submit">Thêm sản phẩm</button>
      </form>
    </div>
  );
}

export default AdminCreate;
