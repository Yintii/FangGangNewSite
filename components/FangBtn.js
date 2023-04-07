import React, { useState } from 'react'

export const FangBtn = (props) => {

   const [rippleVisible, setRippleVisible] = useState(false);


    function handleClick(){
      if (props.disabled) return  
      props.passedFunction ? props.passedFunction() : null;
      setRippleVisible(true);
      setTimeout(() => {
          setRippleVisible(false);
      }, 500);
    }

  return (
        <a
        id={props.id}
        className={`ripple-btn ${props.extraClasses}`}
        onClick={() => handleClick()} 
        href={props?.linkTo}
        target="_blank"
        >
            <label>{props.label}</label>
            {rippleVisible && (
              <div className={`ripple1 ${props.growerType}`}> 
                  <div 
                    className='ripple2' style={{ backgroundColor: props.variant == 'lg-purple' ? '#FFC657' : ''}}>
                      <div 
                        className='ripple3' 
                        style={{ 
                            backgroundColor: props.variant == 'lg-blk' ? "black" : props.variant == 'lg-purple' ? '#6950D0' : '#FFC657'
                        }}>   
                        </div>
                  </div>
              </div>
            )}
        </a>
    
  )
}
