import { Link } from "react-router-dom"

function Card(props) {
    console.log(props)
    const {product,showbutton}=props
  return (
    <>
    
     <div className='relative border border-gray-400 ml-4 hover:shadow-2xl duration-150 mt-4 h-[400px] flex flex-col justify-center '>
   <div className="flex justify-center"><img  src={product.image} className='my-2 w-[120px]'/></div>     
        <h1 className='my-3 mx-3  text-lg font-semibold text-center '>{product.title}</h1>
        <p className='my-2 text-xl mx-2 px-2 font-bold text-center'>Price : ${product.price}</p>
        
    <div className="flex justify-center">
    {showbutton &&  <Link to={`/products/${product.id}`} className='bg-orange-500 text-white mt-4 rounded-full px-8  text-center  text-lg hover:bg-orange-400 hover:shadow-xl duration-100  py-2 '>Order Now </Link>}
    </div> 
     
     </div>

    </>
  )
}

export default Card
