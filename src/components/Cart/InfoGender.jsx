import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const InfoGender = () => {

  const {register } = useForm()

  const [checked,setChecked] = useState('')

  const handleClick = (e) => {

    if(e.target.className === 'male')
    {
      setChecked('male')
 
    }
    else{
      setChecked('female')
    }
  }

  return (
    <div className="gender">
      <input type="radio" name='male' 
             onChange={() => setChecked('male')} 
             checked={checked === 'male'}
             {...register('male')} />
      <label htmlFor="male" className='male' onClick={handleClick}>Anh</label>
      
      <input type="radio" name='female' className='female' 
              onChange={() => setChecked('female')} 
              checked={checked === 'female'}
              {...register('female')} />
      <label htmlFor="female" className='female' onClick={handleClick}>Chị</label>
</div>
  )
}

export default InfoGender