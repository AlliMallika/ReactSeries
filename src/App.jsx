import React from "react";
import Person from "./components/Person";
import { Admin } from "./components/Admin";

const App = ()=>{
 
  return(
    // React Fragment added
    <>
     <Person/>
     {/* //resuable components */}
     <Admin/>  
     <Admin/>
    </>
  )
}
export default App;