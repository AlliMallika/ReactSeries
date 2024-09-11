import React, { useState } from 'react'

export const Counter = () => {
    const [counter, setCounter] = useState(0)
  return (
    <div>
        <div>{counter}</div><br />
    <button onClick={()=>setCounter(counter+1)}>Increase</button>
    <button onClick={()=>setCounter(counter-1)}>Decrease</button>
    </div>
  )
}
