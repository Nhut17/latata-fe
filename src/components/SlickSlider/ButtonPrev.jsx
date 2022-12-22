import React from 'react'

const ButtonPrev = (props) => {
    const {className, style, onClick} = props
    return (
        <span className={className} onClick={onClick}
        style={{...style,
              position: 'absolute',
              display: 'flex',
              width:35,
              height:60,
              borderRadius: '5px',
              backgroundColor: 'rgba(216,216,216,.7)',
              alignItems: 'center',
              justifyContent: 'center',
              transform: 'translate(5px,-20px)',
              zIndex: 100,
              opacity:0.7
              }} ><i class="fa-solid fa-angle-left" style={{color: 'black',
                                                            position: 'absolute',
                                                            fontWeight: 'bold',                 
                                                            fontSize:30}} ></i></span>
    )
}

export default ButtonPrev
