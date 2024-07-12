import React, { useState } from 'react'
import { BsChevronLeft,BsChevronRight } from "react-icons/bs";

function Hero() {
    const slides =[
        {
            url:"https://mfrsegre.fr/wp-content/uploads/2020/06/retailcounter-min.jpg"
        },
        {
            url:"https://th.bing.com/th/id/R.4628ef9bd27f5870dff7adff62c96d92?rik=WbqtixHj7KHNTQ&pid=ImgRaw&r=0"
        },
        {
            url:"https://www.cfa-beaujolais.fr/wp-content/uploads/2021/03/blake-wisz-tE6th1h6Bfk-unsplash-1280x853.jpg"
        },
        {
            url:"https://www.educatel.fr/wp-content/uploads/2021/04/metier-chef-de-rayon-1.jpg"
        }
    ]
    const[currentIndex,setCurrentindex]=useState(1)
const prevSlide=()=>{
    const isfirstslide = currentIndex ===0
    const nexindex=isfirstslide? slides.length -1:currentIndex-1
    setCurrentindex(nexindex)
};
const nextslide=()=>{
    const isfirstslide = currentIndex === slides.length -1
    const nexindex=isfirstslide? 0 :currentIndex+1
    setCurrentindex(nexindex)
}
setTimeout(prevSlide,3000)
  return (
    <>
      <div className='max-w-[1400px] flex justify-center h-[780px] w-full m-auto relative group px-4 py-16'>
<div style={{backgroundImage:`url(${slides[currentIndex].url})`}} className='w-[86%] h-[89%] rounded-2xl bg-center bg-cover duration-500'>
</div>

<div  className='hidden absolute top-[42%]  translate-x-0 translate-y-[-50%] left-7 rounded-2xl p-2 group-hover:block text-black bg-black/20 cursor-pointer text-2xl'>
    <BsChevronLeft onClick={prevSlide} size={30}/>
</div>
<div  className='hidden absolute top-[42%] translate-x-0 translate-y-[-50%] right-7 rounded-2xl p-2 group-hover:block text-black bg-black/20 cursor-pointer text-2xl'>
    <BsChevronRight onClick={nextslide} size={30}/>
</div>

      </div>

    </>
  )
}

export default Hero
