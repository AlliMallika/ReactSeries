import React from "react";
import Person from "./components/Person";
import { Admin } from "./components/Admin";
import { Product } from "./components/Product";
import { Events } from "./components/Events";
import { Counter } from "./components/Counter";
import { ShowProduct } from "./components/ShowProduct";
import { Form } from "./components/Form";

const App = () => {
  // Internal styling for the button container
  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center',     // Center vertically
    height: '100vh'           // Full viewport height
  };

  // Base styling for product boxes
  const baseProductStyle = {
    padding: '10px',
    margin: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '10px',
    border: '2px solid white',
  };

  const productStyles = {
    gray: {
      backgroundColor: 'gray',
      ...baseProductStyle,
    },
    green: {
      backgroundColor: 'green',
      ...baseProductStyle,
    },
    blue: {
      backgroundColor: 'blue',
      ...baseProductStyle,
    },
  };

  return (
    <>
      {/* <Person/> */}
      {/* <Admin/>  
      <Admin/> */}
      {/* <h1><b><center><u>Different Types of Mobile Products</u></center></b></h1>
      <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          padding: '5px', 
          margin: '2px'
        }}>
        <div style={productStyles.gray}>
          <Product title="Galaxy s24 Ultra" brand="Samsung" price={150000} RAM="8GB" />
        </div>
        <div style={productStyles.green}>
          <Product title="IPhone 16" brand="Apple" price={750000} />
        </div>
        <div style={productStyles.blue}>
          <Product title="OnePlus13" brand="OnePlus" price={35000} />
        </div>
      </div>
      <div style={{textAlign:'center'}}>
        <Events />
      </div>
      <div><Counter/></div> */}
      <div>
        {/* <ShowProduct/> */}

        <Form/>
      </div>
    </>
  );
}

export default App;
