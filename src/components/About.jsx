import React from 'react'
import img from '../assets/img.jpg'
function About() {
  return (
    <>
<div className='flex justify-center mb-12 text-3xl mt-8 font-semibold text-orange-400'>
<h1>About Us</h1>
</div>
<div className='w-[90%] flex justify-center gap-9 relative'>
    <img src={img} className='relative left-8 top-2 rounded-2xl object-cover h-[40%] w-[40%] ml-9' />
    <p className='w-[46%] relative left-6'>Thrive Sustainable Goods, a passionate e-commerce company, curates a collection of eco-friendly products for the everyday home. Their mission is to make sustainable living accessible, offering everything from organic cleaning supplies to bamboo cutlery. They prioritize fair trade practices and carbon-neutral shipping, ensuring their business practices align with their environmental values.</p>
</div>
    </>
  )
}
export default About;
