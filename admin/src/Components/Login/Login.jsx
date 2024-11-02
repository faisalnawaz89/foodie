import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Login.css'


  const LoginSignup = ({url}) => {

    const navigate = useNavigate()
    const isAuthenticated = localStorage.getItem('token'); 
    const [formData, setFormdata] = useState({
        username: '',
        email:'',
        password: ''
    })
    const changeHandler = (e) => {
        setFormdata({...formData,[e.target.name]:e.target.value})
    }

    const Login = async () => {
        let responseData
        await fetch(url + '/api/user/login',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
        }).then((response)=> response.json())
        .then((data)=> responseData = data)
        if(responseData.success){
            localStorage.setItem('token', responseData.token)
            toast.success('You have Successfully logged in')
            setTimeout(()=>{
                navigate('/add')
            },2000)
        }else{
            toast.error(responseData.errors)
        }
    }

    useEffect(() => {
        if (isAuthenticated) {
          navigate('/add');
        }
    }, [isAuthenticated, navigate]);

  return (
        <>
        <div className='login-container'>
            <div className='form-body'>
            <h1>Login</h1>
            <div className="loginSignup-fields">
                <input value={formData.email} onChange={changeHandler} name="email" type="email" placeholder='Email ID'/>
                <input value={formData.password} onChange={changeHandler} name="password" type="password" placeholder='Password' />
                <button onClick={()=>{Login()}}>Continue</button>
            </div>
            </div>
        </div>
        </>
  )
}

export default LoginSignup