import React,{useState} from 'react'


const MenuTopBlock = ({menuTop}) => {

    const [highlight,setHighlight] = useState(menuTop[0].title)

  return (
    <ul className='menu-top-block'>
    {menuTop.map((item,index) => (
        <li key={index} className='item-menu'>
            <span 
            className='content'
            onClick={() => 
            {
              setHighlight(item.title);           
            }
            }
            style={highlight === item.title ? {
                backgroundColor:'#1A374D',
                fontWeight: 'bold',
                color:'#FFFFFF',
            } : {}}
            >{item.title}</span>
        </li>
        ))}
    </ul>
  )
}

export default MenuTopBlock