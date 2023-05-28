import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { getInfoTech } from '../../../../../redux/Category/categorySlice'



const InfoTechProduct = ({id_cate,register}) => 
{
    const dispatch = useDispatch()
    const { info_tech } = useSelector(state => state.category)
   


   

    useEffect(() =>{

        dispatch(getInfoTech(id_cate))

    },[id_cate])

  return (
    <div style={{
        width: '100%',
        margin: '20px 0',
        border: '1px solid #e4e4e4',
        padding: '30px 10px',
        borderRadius: 12,
        display: 'flex',
        flexWrap: 'wrap'
    }}>

        {
            info_tech && info_tech?.info_tech.map(info => (
                <div className="group-info" style={{width: '50%'}}>
                    <span >{info.title}: </span>
                    <input 
                        {
                            ...register(`${info.title.toLowerCase()}`,
                            {
                                required: true
                            })
                        }
                        
                           type="text"
                           style={{
                            width: '80%',
                            marginLeft: 5
                           }}  />
                </div>
            ))
        }
      
      
    </div>
  )
}

export default InfoTechProduct
