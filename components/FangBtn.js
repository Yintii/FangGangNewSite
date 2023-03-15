import React, { useRef } from 'react'
import '@/styles/FangBtn.module.css'

export const FangBtn = (props) => {


   const rippleBtn = useRef(null);
   const ripple = useRef(null);

    function handleClick(){
        props.passedFunction()
        ripple.style.display = 'flex';
        ripple.classList.add('rippleGrower');
        setTimeout(() => {
            ripple.style.display = 'none';
            ripple.classList.remove('rippleGrower');
        }, 500)
    }

  return (
    <>
          <button className="ripple-btn" ref={rippleBtn} onClick={() => handleClick()} >
              <label>{props.label}</label>
              <div ref={ripple} className='ripple1'>
                  <div className='ripple2'>
                      <div className='ripple3'></div>
                  </div>
              </div>
          </button >
    </>
  )
}
