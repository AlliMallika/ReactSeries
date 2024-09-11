import React from 'react'

export const ShowProduct = () => {
    let products = [
        {id: 1, title:"Iphone16", category:"mobile", price: 150000},
        {id: 2, title:"Hp probook", category:"laptops", price:120000},
        {id: 3, title:"MI tab", category:"Tab", price:170000},
        {id: 4, title:"Realme", category:"Mobile", price:30000},
        {id: 5, title:"Sony Camera", category:"Camera", price:200000}

    ]
    const filteredData = products.filter((product)=>product.category=="mobile");
    console.log("Filtered Data:", filteredData);
    return (
    <>
    <div>
        <h1>Product Data using Map</h1>
        {products.map(product =>(
            <div key={product.id}>
                <h3>Product Name:{product.title}</h3>
                <h3>Product Category:{product.category}</h3>
                <p>Product Price:{product.price}</p>
            </div>
        ))}
    </div>
    <div>
        <h1>Filtering Product Data</h1>
        {filteredData.map(product=>(
            <div key={product.id}>
                <h3>Product Name:{product.title}</h3>
                <h3>Product Category:{product.category}</h3>
                <p>Product Price:{product.price}</p>
            </div>
        ))}
    </div>
    </>
  )
}
