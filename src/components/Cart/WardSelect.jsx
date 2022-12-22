import React from 'react'
import { useState } from 'react'
import { useRef,useEffect } from 'react'
import { useContext } from 'react'
import { AddressContext } from '../../context/AddressContext'
import DropDownList from './DropDownList'


const WardSelect = () => {

  const inputRef = useRef()
  const dropRef = useRef()

  const context = useContext(AddressContext)
  const [showWard,setShowWard] = useState(false)

  const [selected,setSelected] = useState('')

  const handleSelectedWard = () => {
      setShowWard(!showWard)
  }

  useEffect(() => {
    if(selected !== '')
      {
        setShowWard(false)
      }
    
    const handleMouseDown = (e) => {
      if(!inputRef.current?.contains(e.target) && e.target.id !== 'show') 
      {
        setShowWard(false)
      }
    
    }
    document.addEventListener('mousedown', handleMouseDown)
    return () => {
        document.removeEventListener('mousedown', handleMouseDown)
    }
   
},[selected])

  return (
    <>
        <div className="ward input" onClick={handleSelectedWard}>
            <input type="text" value={selected ? selected : 'Chọn Phường / Xã'}  disabled={true} />
        </div>
        {
            showWard &&   <DropDownList data={context.search(context.listCity[0]?.districts[context.indexDistrict]?.wards)} 
            title={'phường xã'}
            search={context.setSearchProvince}
            selected={setSelected}
            selectId={context.setSelectedWard}
            className={'ward'}
            ref={inputRef}
             />
        }
    </>
  )
}

export default WardSelect