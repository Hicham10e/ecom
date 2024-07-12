import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Products from './Products'
import Contact from './Contact'

function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Products/>
      <Contact/>
    </>
  )
}

export default Home
