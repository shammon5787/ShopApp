import { useState } from 'react'
import Navbar from './Components/Navbar'
import ProductCart from './Components/ProductCart'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartPage from './Components/cartPage'
import MyProps from './props'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <MyProps name="Ahmad" email="ahmad@gmail.com" />
          <MyProps name="Zeeshan"  email="zeeshan@mail.com"/>
        <Routes>
          <Route path='/' element={<ProductCart />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
