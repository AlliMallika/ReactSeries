import React from "react";
const App = ()=>{
  const name = 'Mallika';
  const role = 'Backend Developer';
  const Person = {
    name:'Shiv',
    place:'Kailash',
  }
  return(
    // React Fragment added
    <>
    <div>
      <h1>Hi! This is {name}, {role}</h1>
      <p>This is React Lecture.</p>
    </div>
    <div>
      <h1>{Person.name}</h1>
    </div>
    </>
  )
}
export default App;