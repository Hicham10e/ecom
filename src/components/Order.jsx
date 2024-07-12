import React from 'react'
import Card from './Card'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
function Order() {
    const api_Url ='https://fakestoreapi.com/products'
    const[product,setProducts]=useState({})
    const params=useParams()
console.log(params)
    useEffect(()=>{
        fetch(`${api_Url}/${params.productid}`)
        .then((res)=>res.json())
        .then((product)=>setProducts(product))
    },[])
  return (
    <> 
      <div className='flex justify-center w-[100%] h-[70%]'>
    <Card product={product} showbutton={false} />
      </div>
    </>
  )
}

export default Order
