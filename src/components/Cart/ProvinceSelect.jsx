import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { AddressContext } from '../../context/AddressContext'
import DropDownList from './DropDownList'

const ProvinceSelect = () => {

    const inputRef = useRef()
    const dropRef = useRef()

    const context = useContext(AddressContext)

    const [selected,setSelected] = useState(context.provinces[0]?.name)
    const [showProvince,setShowProvince] = useState(false)

    const handleSelectedProvince = () => {
        setShowProvince(!showProvince)
    }


    // console.log('drop ref: ' + dropRef.current)
    

    useEffect(() => {
        if(selected !== '')
          {
            setShowProvince(false)
          }
        
        const handleMouseDown = (e) => {
          if(!inputRef.current?.contains(e.target) && e.target.id !== 'show') 
          {
            setShowProvince(false)    
          }
        
        }
        document.addEventListener('mousedown', handleMouseDown)
        return () => {
            document.removeEventListener('mousedown', handleMouseDown)
        }
       
    },[selected])

    

  return (
    <>
    <div className="province input" onClick={handleSelectedProvince}>
        <input type="text" value={selected ? selected : context.provinces[0]?.name}  disabled={true}
                ref={inputRef}  />
    </div>
        {
            showProvince &&   <DropDownList data={context.search(context.provinces)} 
            title={'tỉnh, thành'}
            search={context.setSearchProvince}
            selected={setSelected}
            selectId={context.setSelectedProvince}
            className={'province'}
            ref={dropRef}
            />
        }
    </>
  )
}

export default ProvinceSelect