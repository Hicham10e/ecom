import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
     <div className='mt-[20px]'>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff5500" fill-opacity="0.9" d="M0,96L60,122.7C120,149,240,203,360,208C480,213,600,171,720,149.3C840,128,960,128,1080,133.3C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
     </svg>
     </div> 
     <div className='flex justify-center my-6 font-bold'>
     <a className='text-center text-3xl text-orange-500'>Contacts</a>
     </div>

    <footer className="bg-orange-600 text-black py-8 px-4 ">
      <div className="container flex flex-col w-[100%] md:flex-row md:justify-between">
        <div className="mb-6 mt-2 ml-2 md:mb-0 ">
          <h2 className="text-2xl font-bold text-black">H&M Shop</h2>
          <p className="text-sm text-black mt-4">
         <p className="py-1 text-lg font-semibold">Dress Your Vibe. Power Your Life.</p> 

Concept: A fast-paced, energetic commercial showcasing how H&M outfits and electronics seamlessly blend to elevate your everyday life.
          </p>
        </div>
        <div className="flex flex-col space-x-2 md:space-x-8 md:space-y-0 md:flex-row">
          <nav className='mt-2 ml-2'>
            <h3 className="text-lg font-bold mb-2">Navigation</h3>
            <ul className="list-none space-y-2">
              <li>
              <Link to="/about" className="text-black hover:underline">
                  About Us
                </Link>
              </li>
              <li>
               <Link to="/contact" className="text-black hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-black hover:underline">
                  Help Center
                </a>
              </li>
            </ul>
          </nav>
          <nav className=''>
            <h3 className="text-lg font-bold mb-2 mt-2">Shop</h3>
            <ul className="list-none space-y-2">
              <li>
                <Link to="/products" className="text-black hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <a href="#" className="text-black hover:underline">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:underline">
                  Track My Order
                </a>
              </li>
            </ul>
          </nav>
          <div className=''>
            <h3 className="text-lg font-bold mb-2 mt-2">Follow Us</h3>
            <ul className="space-x-4 flex mb-3 md:mr-2">
              <li>
                <a href="https://www.facebook.com" target='_blank' className="text-black hover:text-orange-400">
<FaFacebook/>                
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" target='_blank' className="text-black hover:text-orange-400">
            <FaTwitter/>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target='_blank' className="text-black hover:text-orange-400">
               <FaInstagram/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} H&M Shop. All Rights Reserved.</p>
      </div>
    </footer>
  ;




    </>
  )
}

export default Contact
