import React from 'react'
import flash from '../../assets/images/flash.png'


const BoxFilter = ({totalQuantity,childCate, functions}) => {
  return (
    <div className='box-filter'>

      <div className="box-sort">


                <p className='title-quantity' style={{padd}}>{totalQuantity} {childCate}</p>
                   
        
                {/* <div className="flash">
                    <a href="">
                        <input type="checkbox" />
                        <img src={flash} alt="flash" />
                        <p><b>GIAO NHANH</b></p>

                    </a>
                </div>

                <div className="discount-accessories">
                    <input type="checkbox" />
                    <p>Giảm giá</p>
                </div> */}
      </div>


                {/* <div className="select-sort">
                <span>Xếp theo: </span>
                <select name="" id="arrange"  >
                    <option value="percent_increase">% Giảm</option>
                    <option value="decrease">Giá cao đến thấp</option>
                    <option value="increase">Giá thấp đến cao</option>
                </select>
                

                
            </div> */}

    </div>

  )
}

export default BoxFilter
