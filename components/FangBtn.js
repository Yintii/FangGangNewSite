import React, { useState } from 'react'

export const FangBtn = (props) => {

   const [rippleVisible, setRippleVisible] = useState(false);


    function handleClick(){
        setRippleVisible(true);
        setTimeout(() => {
            setRippleVisible(false);
        }, 500);
    }

  return (
        <a 
        className={`ripple-btn yellow-bg`}
        onClick={() => handleClick()} 
        href={props?.linkTo}
        >
            <label>{props.label}</label>
            {rippleVisible && (
              <div className={`ripple1 rippleGrower`}>
                  <div className='ripple2'>
                      <div className='ripple3 yellow-bg'></div>
                  </div>
              </div>
            )}
        </a>
    
  )
}
