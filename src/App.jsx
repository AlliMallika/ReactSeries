import React from "react";
import Person from "./components/Person";
import { Admin } from "./components/Admin";
import { Product } from "./components/Product";

const App = ()=>{
 //internal styling
  const obj = {
          display: 'flex', 
          justifyContent: 'space-between', 
          padding: '5px', 
          margin: '2px'
  }

  return(
    // React Fragment added
    <>
     <Person/>
     {/* //resuable components */}
     {/* <Admin/>  
     <Admin/> */}
       <h1><b><center><u>Different Types of Mobile Products</u></center></b></h1>
     {/* //inline styling */}
     <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          padding: '5px', 
          margin: '2px'
        }}>
      {/* <div style={obj}> */}
        {/* <div className='div'> //external CSS */}
    <div style={{ backgroundColor:"gray", padding:'10px', margin:'20px', display:'flex',justifyContent:"space-between", borderRadius:"10px",
          border:'2px solid white',}}>
    <Product title="Galaxy s24 Ultra" brand="Samsung" price={150000} RAM="8GB"/>
    </div>
    <div style={{ backgroundColor:"green", padding:'10px', margin:'20px', display:'flex',justifyContent:"space-between", borderRadius:"10px",
          border:'2px solid white',}}>
      <Product title="IPhone 16" brand="Apple" price={750000}/>
    </div>
    <div style={{ backgroundColor:"blue", padding:'10px', margin:'20px', display:'flex',justifyContent:"space-between", borderRadius:"10px",
          border:'2px solid white',}}>
      <Product title="OnePlus13" brand="OnePlus" price={35000}/>
    </div>
    </div>
    </>
  )
}
export default App;