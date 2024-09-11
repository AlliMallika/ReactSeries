import React from 'react'

export const Events = () => {
    const handleClick =(a)=>{
        alert(`you clicked the button ${a}`);
    }
  return (
    <div>
        <button onClick={()=>handleClick(10)}>Click Me!</button>
    </div>
  )
}
