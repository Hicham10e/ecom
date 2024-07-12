import React, { useEffect, useState } from 'react'
import Card from './Card'
function Products() {
    const apiUrl ='https://fakestoreapi.com/products'
    const[products,setProducts]=useState([])
    const[cat,setCat]=useState([])

      const getproducts=()=>{
        fetch(apiUrl)
        .then((res)=>res.json())
        .then((data)=>setProducts(data))
    }
    const getcategories=()=>{
      fetch(`${apiUrl}/categories`)
      .then((res)=>res.json())
      .then((data)=>setCat(data))
  }
  useEffect(()=>{
    getproducts()
    getcategories()
  },[])
  const getproductsIncategory=(name)=>{
    fetch(`${apiUrl}/category/${name}`)
    .then((res)=>res.json())
    .then((data)=>setProducts(data))
  }
  return (
    <>
      <div className='mt-20'>
     <h1 className='text-3xl text-center text-orange-500 font-semibold '>Our Products</h1> 
     </div>
     <div className='grid grid-cols-2 md:flex justify-center mt-10 '>
     <button className='text-white bg-orange-500 mx-4 py-2 my-4 rounded-full font-semibold px-4 text-center hover:shadow-xl duration-200 hover:bg-orange-400' onClick={()=>{getproducts()}}>All</button>
     {cat.map((c)=>{
      return <button onClick={()=>{getproductsIncategory(c)}} className='text-white bg-orange-500 mx-4 py-2 my-4 rounded-full font-semibold px-4 text-center hover:bg-orange-400 duration-200 hover:shadow-xl' key={c}>{c}</button> })}
      </div>
    <div className='grid grid-cols-2 gap-2 lg:grid-cols-3 w-full'>
    {products.map((product)=>{
        return (
            <>
            
            <div key={product.id} className='w-[320px]'>
            <Card product={product} showbutton={true} />
             </div>
            
            </>
        )
    
    })}
    </div>
    
    </>
  )
}

export default Products
