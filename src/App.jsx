import { useState } from 'react'
import Navbar from './Components/Navbar'
import ProductCart from './Components/ProductCart'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <ProductCart />
    </>
  )
}

export default App
