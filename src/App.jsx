import React from "react";
import Person from "./components/Person";
import { Admin } from "./components/Admin";
import { Product } from "./components/Product";

const App = ()=>{
 
  return(
    // React Fragment added
    <>
     <Person/>
     {/* //resuable components */}
     {/* <Admin/>  
     <Admin/> */}
     <div>
    <h1><b><center><u>Different Types of Mobile Products</u></center></b></h1>
      <Product title="Galaxy s24 Ultra" brand="Samsung" price={150000} RAM="8GB"/>
      <Product title="IPhone 16" brand="Apple" price={750000}/>
      <Product title="OnePlus13" brand="OnePlus" price={35000}/>
     </div>
    </>
  )
}
export default App;