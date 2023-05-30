import { useDispatch, useSelector } from 'react-redux';
import '../AdminCate.scss'
import React, { useEffect, useRef, useState, CSSProperties  } from 'react';
import { useForm } from 'react-hook-form';
import MoonLoader from "react-spinners/ClipLoader";
import { addInfoTech, deleteInfoTech, getInfoTech } from '../../../../../redux/Category/categorySlice';
import { ToastContainer, toast } from 'react-toastify';


const Specification = () => {

    const { handleSubmit, register, formState: {errors} } = useForm()

    // variables state redux
    const { listCate,info_tech, successAddInfoTech, loading, successDelete } = useSelector(state => state.category)
    const dispatch = useDispatch()

    const [currentCate,setCurrentCate] = useState(listCate ? listCate[0]?._id : '')

    const [listInfoTech,setListInfoTech] = useState([])
    const [tags, setTags] = useState([
        
    ])

    // console.log('info_tech: ',info_tech)
    // console.log('tags: ',tags)
    // console.log('current cate: ', currentCate)

    // handle select category
    const handleSelectCate = (e) => {

        setCurrentCate(e.target.value)

    }
    
    useEffect(() => {

        if(currentCate) {
            dispatch(getInfoTech(currentCate))
        }

    },[currentCate])


     // handle info tech set array tags
   useEffect(() => {

    if(info_tech == null)
    {
         setTags([])
         console.log('info_tech null')
      
     }else{
         console.log('info_tech')
      
         let list = []
        info_tech?.info_tech.forEach(el => {

             if(!list.includes(el.title))
             {
                 list.push(el)
             }
         })
         
         setTags([...list])
     }

   },[info_tech])
    

    function handleKeyDown(e){

        if(e.key !== 'Enter') return
        const value = e.target.value
        if(!value.trim()) return
        setTags([...tags, value])
        e.target.value = ''
    }

    // handle remove tag
    function removeTag(index){
        setTags(tags.filter((el, i) => i !== index))
    }

    // handle submit
    const handleOnSubmit = (formData) => {
        const data = {
            id_cate: formData.infoTech,
            title: formData.title
        }

        dispatch(addInfoTech(data))
    }

    const handleRemoveTag = (id) => {
        const data = {
            id,
            id_cate: currentCate
        }
        console.log(data)
        // removeTag(index)

        dispatch(deleteInfoTech(data))
    }

    // handle toastify when successfull
    useEffect(() => {
        if(successAddInfoTech){
          toast.success('Thêm thông số thành công', {
          position: "top-right",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
          });

        if(successDelete)
        {
            toast.success('Xóa thành công', {
                position: "top-right",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
                });
        }  
    
        const time = setTimeout(() => {
          window.location.reload()
        },1500)
    
        return () => {
          clearTimeout(time)
        }
    
        }
      },[successAddInfoTech,successDelete])

    return (
        <>
            <ToastContainer />
            {/* {
                loading && <div style={{
                    position: 'absolute',
                    height:'100%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', 
                    backgroundColor: '#e4e4e4',
                    opacity: 0.6 ,
                    zIndex: 3,
                }}>
                    <div style={{
                        position: 'absolute',
                        transform: 'translate(-150px, -100px)'
                    }}>
                        <MoonLoader
                            color={"blue"}
                            loading={loading}
                            
                            size={100}
                           
                        />
                    </div>
                </div>
            } */}
            

            <div className="box-specifications">
                    <form onSubmit={handleSubmit(handleOnSubmit)}>
                        <div className="input-group">
                            <span style={{marginBottom : '10px'}}>Danh mục : </span>

                            <select name="" id="" 
                                    {...register('infoTech', {
                                        onChange: handleSelectCate
                                    })}>
                                {
                                    listCate && listCate.map(val => (
                                        <option key={val.name}
                                                value={val._id}
                                              
                                                 >{val.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="list-specifications">
                            <span style={{marginBottom : '10px'}}>Thông số kĩ thuật : </span>
                           
                            <div className="specification-selected">
                                {/* <TagsInput
                                    value={selected}
                                    onChange={setSelected}
                                    name="specification"
                                    placeHolder="+ Thêm"
                                    
                                /> */}

                               
                            <div className="tags-input-container">
                                <div className="input-specification">
                                    <input onKeyDown={handleKeyDown} type="text"
                                         className="tags-input" placeholder="Nhập thông số"
                                         {...register('title', {
                                            required: true
                                         })} />
                                          {
            errors.title?.type === 'required' &&
            <span className='err-msg' >Mời bạn nhập thông số kỹ thuật</span> 
          }
                                </div>
                                { info_tech && tags.map((tag, index) => (
                                    <div className="tag-item" key={index}>
                                        <span className="text">{tag.title}</span>
                                        <span className="close" 
                                        onClick={() => handleRemoveTag(tag._id)}>&times;</span>
                                    </div>
                                )) }
                                        
                            </div>

                            </div>

                            <div className="submit">
                                <button type='submit'>Lưu thay đổi</button>
                            </div>
                        </div>

                    </form>
                </div>
        </>
    )
}

export default Specification