import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const InfoNameNumber = () => {
    const {register } = useForm()
    const [changeStyleName,setChangeStyleName] = useState(false)
    const [changeStyleNumber,setChangeStyleNumber] = useState(false)


    console.log(changeStyleName)

    const handleOnChange = (e) => {
     
        if(e.target.value)
        {
            setChangeStyleName(true)   
            
        } else{
            setChangeStyleName(false)
        }
    }
    const handleOnChangeNumber = (e) => {
        setChangeStyleNumber(true)
     
        if(e.target.value === '')
        {
            setChangeStyleNumber(false)   
            
        }
    }

  return (
    <div className="name-and-number">
    <div className="name input"  >
        <input type="text" name='name' onChange={handleOnChange}
            />
        <span htmlFor='name' style={changeStyleName ? {
                                                    transform: 'translate(15px,-15px)',
                                                   fontSize: 14,
                                                   backgroundColor:'white',
                                                   padding: '0 3px' } : {}}>Họ và Tên</span>
    </div>
    <div className="number input">
        <input type="text"  name='number' onChange={handleOnChangeNumber}
             />
        <span htmlFor='number' style={changeStyleNumber ? {transform: 'translate(15px,-15px)',
                                                   fontSize: 14,
                                                   backgroundColor:'white',
                                                   padding: '0 3px' } : {}}>Số điện thoại</span>
    </div>
    </div>
  )
}

export default InfoNameNumber