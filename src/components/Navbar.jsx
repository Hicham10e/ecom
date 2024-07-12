import React, { useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { NavLink } from 'react-router-dom';

function Navbar() {
    const[navbar,setNavbar]=useState(false)
 const toggle=()=>{
    setNavbar(!navbar)
 }
    return (
    
    <>
      <nav className='flex  justify-between w-full mt-8' >
        <NavLink to='/' className='text-2xl text-orange-500 cursor-pointer font-bold ml-8 md:text-3xl'>H&M Shop</NavLink>
      <div className='md:relative right-10'>
        <ul className='hidden md:flex justify-between'>
            <li className='text-lg mx-2  '><NavLink to='/' className=' hover:border-b-2 duration-100 border-orange-300 px-2 cursor-pointer'>Home</NavLink></li>
            <li className='text-lg mx-2  '><NavLink to='/about' className=' hover:border-b-2 duration-100 border-orange-300 px-2 cursor-pointer'>About us</NavLink></li>
            <li className='text-lg mx-2  '><NavLink to='/products' className=' hover:border-b-2 duration-100 border-orange-300 px-2 cursor-pointer'>Products</NavLink></li>
            <li className='text-lg mx-2  '><NavLink to='/contact' className=' hover:border-b-2 duration-100 border-orange-400 px-2 cursor-pointer'>Contacts</NavLink></li>
        </ul>
      </div>
<button onClick={toggle} className='md:hidden  text-3xl font-semibold mr-6'>{!navbar?<TiThMenu />:<IoIosCloseCircleOutline/>}</button>
{navbar?
<div className='fixed bg-black  md:hidden'>
        <ul className='fixed top-20 left-7  w-[50%] '>
            <li className='text-lg mt-3  '><a className='pb-2 mt-2 hover:border-b-2 duration-100 border-orange-300 px-2 cursor-pointer'>Home</a></li>
            <li className='text-lg mt-3  '><a className='pb-2 mt-2 hover:border-b-2 duration-100 border-orange-300 px-2 cursor-pointer'>About Us</a></li>
            <li className='text-lg mt-3  '><a className='pb-2 mt-2 hover:border-b-2 duration-100 border-orange-300 px-2 cursor-pointer'>Products</a></li>
            <li className='text-lg mt-3  '><a className='pb-2 mt-2 hover:border-b-2 duration-100 border-orange-300 px-2 cursor-pointer'>Contact</a></li>
        </ul>
      </div>:null}
      </nav>
    </>
  )
}

export default Navbar
