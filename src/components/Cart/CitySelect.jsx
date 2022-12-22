import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useContext,useEffect } from 'react'
import { AddressContext } from '../../context/AddressContext'
import DropDownList from './DropDownList'

const CitySelect = () => {

    const inputRef = useRef()
    const dropRef = useRef()

    const context = useContext(AddressContext)
    const [showCity,setShowCity] = useState(false)

    const [selected,setSelected] = useState('')

    const handleSelectedCity = () => {
        setShowCity(!showCity)
    }

    useEffect(() => {
      if(selected !== '')
        {
          setShowCity(false)
        }
      
      const handleMouseDown = (e) => {
        if(!inputRef.current?.contains(e.target) && e.target.id !== 'show') 
        {
          setShowCity(false)
        }
      
      }
      document.addEventListener('mousedown', handleMouseDown)
      return () => {
          document.removeEventListener('mousedown', handleMouseDown)
      }
     
  },[selected])


  return (
    <>
       <div className="city input" onClick={handleSelectedCity}>
            <input type="text" value={selected ? selected : 'Chọn Quận / Huyện'}  disabled={true} ref={inputRef}  />
        </div>
        {
            showCity &&   <DropDownList data={context.search(context.listCity[0]?.districts)} 
            title={'thành phố'}
            search={context.setSearchProvince}
            selected={setSelected}
            selectId={context.setSelectedCity}
            className={'city'}
            ref={inputRef}
            />
        }
    </>
  )
}

export default CitySelect