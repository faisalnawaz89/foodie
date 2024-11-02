import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import {Routes, Route} from 'react-router-dom'
import Add from './Pages/Add/Add'
import Orders from './Pages/Orders/Orders'
import List from './Pages/List/List'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import LoginSignup from './Components/Login/Login'

const App = () => {

  const url = "https://foodie-app-backend.onrender.com";

  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
            <Route path='/login' element={<LoginSignup url={url}/>} />
            <Route path="/add" element={<PrivateRoute element={<Add url={url} />} />} />
            <Route path="/list" element={<PrivateRoute element={<List url={url} />} />} />
            <Route path="/orders" element={<PrivateRoute element={<Orders url={url} />} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App