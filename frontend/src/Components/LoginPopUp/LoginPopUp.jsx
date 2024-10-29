import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../Assets/assets'

const LoginPopUp = ({setUserLogin}) => {

  const [currentState, setCurrentState] = useState('Signup')

  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <img onClick={()=>setUserLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-input">
                {currentState === 'Login'?<></>:<input type="text" placeholder='Your name:' requried/>}
                <input type="email" placeholder='Your email' required />
                <input type="password" placeholder='Password' required/>
                <button>{currentState === 'Signup'?"Create an account":'Login'}</button>
            </div>
            <div className="login-popup-condition">
                <input id="condition" type="checkbox" required />
                <label htmlFor="condition">By proceeding, I agree to the terms and conditions.</label>
            </div>
            <div className="new-account">
            {currentState === 'Login'? <p>Create an new account? <span onClick={()=>setCurrentState('Signup')}>Click here!</span></p>:<p>Have already an account! <span onClick={()=>setCurrentState('Login')}>Login here!</span></p>}
            </div>
        </form>
    </div>
  )
}

export default LoginPopUp