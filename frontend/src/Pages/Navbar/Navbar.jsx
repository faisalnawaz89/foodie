import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../Assets/assets'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({setUserLogin}) => {

  const {getTotalCartAmount, token, setToken} = useContext(StoreContext)
  const navigate = useNavigate()

  const Logout = () => {
    localStorage.removeItem('token')
    setToken('')
    navigate('/')
  }

  return (
    <div className='navbar'>
        <Link to="/"><img src={assets.logo} className="logo" alt="" /></Link>
        <ul className="navbar-menu">
            <NavLink to='/'>Home</NavLink>
            <a href='#explore-menu'>Menu</a>
            <a href='#app-download'>Mobile App</a>
            <a href='#footer'>Contact Us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
            <Link to="/cart"> 
                <img src={assets.basket_icon} alt="" />
                <div className={getTotalCartAmount() === 0 ?'':'dot'}></div>
            </Link>
            </div>
            {!token?<button onClick={()=>setUserLogin(true)}>Sign in</button>
            :<div className='navbar-profile'>
              <img src={assets.profile_icon} alt="" />
              <ul className="nav-profile-dropdown">
                <li>
                <Link to='/myorders'>
                  <img src={assets.bag_icon } alt="" />
                  <p>Orders</p>
                </Link>
                </li>
                <hr />
                <li onClick={Logout}><img src={assets.logout_icon} alt="" />
                <p>Logout</p>
                </li>
              </ul>
            </div>}
            
        </div>
    </div>
  )
}

export default Navbar