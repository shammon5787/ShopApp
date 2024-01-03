import { useState } from 'react'
import Navbar from './Components/Navbar'
import ProductCart from './Components/ProductCart'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartPage from './Components/cartPage'
import MyProps from './props'
import Button from './Components/Button'

function App() {
  const [name, setName] = useState("ahmad Khan");

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <MyProps name={name} email="ahmad@gmail.com" />
          <MyProps name="Zeeshan"  email="zeeshan@mail.com"/>
          <Button bgColor="blue" color="white"  name ="UpdateMe" fontSize= "25px"/>
        <Routes>
          <Route path='/' element={<ProductCart />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
