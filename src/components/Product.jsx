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
        <div >
        <h3>Mobile Name:{title}</h3>
        <p>Mobile Brand:{brand}</p>
        <p>Mobile Price:{price}</p>
        <p>Mobile RAM:{RAM}</p>
        </div>
        </>
    )
}
