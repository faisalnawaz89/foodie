import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className="logo" src={assets.logo} alt="" />
        <button className="logout" onClick={()=>{localStorage.removeItem('token');window.location.replace('/login')}}>Logout</button>
    </div>
  )
}

export default Navbar