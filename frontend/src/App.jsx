import React, { useState } from 'react'
import Navbar from './Pages/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import LoginPopUp from './Components/LoginPopUp/LoginPopUp'


const App = () => {

  const [userLogin, setUserLogin] = useState(false)

  return (
    <>
      {userLogin?<LoginPopUp setUserLogin={setUserLogin} />:<></>}
      <div className='app'>
        <Navbar setUserLogin={setUserLogin} />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/order" element={<PlaceOrder/>} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App 