import { useState } from 'react'
import Navbar from './Components/Navbar'
import ProductCart from './Components/ProductCart'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartPage from './Components/cartPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ProductCart />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
