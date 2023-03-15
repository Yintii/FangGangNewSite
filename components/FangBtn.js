import React from 'react'

export const FangBtn = (props) => {
  return (
    <button className="ripple-btn" onClick={()=> props.onclickfunc()} >
        <label>{props.label}</label>
        <div id='ripple1'>
            <div id='ripple2'>
                <div id='ripple3'></div>
            </div>
        </div>
    </button >
  )
}
