
import React from 'react'
import { useState } from 'react'


const DropDownList = ({data,title,search,selected,selectId,className,ref}) => {

  const [change,setChange] = useState(false)

  const handleOnChange = (e) => {
    search(e.target.value)
    setChange(true)
    if(e.target.value === '')
    {
      setChange(false)
    }
  }

  const handleClick = (name,id) => {
    selected(name)
    selectId(id)
  }

  

  return (
    <div className={`drop-down-list ${className}`} 
          style={change ? {height:'auto'} : {} }
          id='show'
          >
        <div className="input-search">
            <input type="text" placeholder={`Nhập ${title} để tìm nhanh`} 
                    onChange={handleOnChange}
                    id='show'
                    
                    />
            <i class="fa-solid fa-magnifying-glass ic"></i>
        </div>

        <ul style={change ? {height:'auto'} : {} }
        
         >
            {
               data && data.map(data => (
                <li key={data.code} id='show' 
                    onClick={() => handleClick(data.name,data.code)} >{data.name}</li>
              ))
            }
           
        </ul>

    </div>
  )
}

export default DropDownList
