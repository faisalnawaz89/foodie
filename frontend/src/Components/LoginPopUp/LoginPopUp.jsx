import React, { useContext, useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../Assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios';

const LoginPopUp = ({setUserLogin}) => {

  const {url, setToken} = useContext(StoreContext)
  const [currentState, setCurrentState] = useState('Signup')
  const [data, setData] = useState({
        name:'',
        email:'',
        password:''
  })

  const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
  }

  const userLogin = async (event) => {

        event.preventDefault();
        let newUrl = url
        if(currentState === "Login"){
            newUrl += "/api/user/login"
        }else{
            newUrl += "/api/user/register"
        }
        console.log(newUrl)
        const response = await axios.post(newUrl, data)
        if(response.data.success){
            setToken(response.data.token)
            localStorage.setItem('token', response.data.token)
            setUserLogin(false)
        }else{
            alert(response.data.message)
        }

  }

  return (
    <div className='login-popup'>
        <form onSubmit={userLogin} className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <img onClick={()=>setUserLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-input">
                {currentState === 'Login'?<></>:<input onChange={onChangeHandler} value={data.name} name="name" type="text" placeholder='Your name:' requried/>}
                <input onChange={onChangeHandler} value={data.email} name="email" type="email" placeholder='Your email' required />
                <input onChange={onChangeHandler} value={data.password} name="password" type="password" placeholder='Password' required/>
                <button type="submit">{currentState === 'Signup'?"Create an account":'Login'}</button>
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