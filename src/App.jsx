import About from "./components/About"
import Products from "./components/Products"
import Contact from "./components/Contact"
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from "./components/Home"
import Order from "./components/Order"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="products/:productid" element={<Order/>}/>

      </Routes>
    </BrowserRouter>
    </>

  
  )
}

export default App
