import React,{useState} from 'react'
import { list_menu_cate_smart_watch } from '../data'
import { Link } from 'react-router-dom'

const MenuTopFixed = () => {

    const [highlight,setHighlight] = useState('')
    const [show,setShow] = useState(false)

  return (
    <div className='menu-top-fixed'>
         <div className="menu-cate">
            <ul>
                {list_menu_cate_smart_watch.map(cate => (
                    <li key={cate.id}>
                        <Link to='' className='cate-link'>
                            <div className={`box-icon i-${cate.name}`}
                            style={ highlight === cate.title ? {
                                backgroundColor:'#f2c94c', 
                            } : {}}>
                                <i className={`icon-${cate.name} icon`} 
                                 ></i>
                            </div>
                            <p className='title'
                                style={ highlight === cate.title ? {
                                    color:'#f2c94c',
                                    fontWeight: 'bold', 
                                } : {}}
                            >{cate.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default MenuTopFixed