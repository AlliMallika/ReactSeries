import React from 'react'

// export const Product = (props) => {
//   return (
//     <>
//     <div>
//         <h1>Mobile Name:{props.title}</h1>
//         <p>Mobile Brand:{props.brand}</p>
//         <p>Mobile Price:{props.price}</p>
//         <p>Mobile RAM:{props.RAM}</p>
//     </div>
//     </>
//   )
// }

export const Product =({title, brand, price, RAM})=>{
    return(
        <>
        <h1>Mobile Name:{title}</h1>
        <p>Mobile Brand:{brand}</p>
        <p>Mobile Price:{price}</p>
        <p>Mobile RAM:{RAM}</p>
        </>
    )
}
