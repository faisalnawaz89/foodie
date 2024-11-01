import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {

  
  const navigate = useNavigate()
  const {getTotalCartAmount, token, food_list, cartItem, url} = useContext(StoreContext)

    const [data, setData] = useState({
        firstname:'',
        lastname:'',
        email:'',
        street:'',
        city:'',
        state:'',
        zipcode:'',
        country:'',
        phone:''
    })

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data=>({...data,[name]:value}))
    }

    const placeOrder = async (event) => {
        event.preventDefault();
        let orderItem = []
        food_list.map((item)=>{
            if(cartItem[item._id] > 0){
                let itemInfo = item;
                itemInfo['quantity'] = cartItem[item._id]
                orderItem.push(itemInfo)
            }
        })
        let orderData = {
            address:data,
            items:orderItem,
            amount:getTotalCartAmount()+2
        }
        let response = await axios.post(url+"/api/order/placeorder", orderData,{headers:{token}})
        if(response.data.success){
            const {session_url} = response.data;
            window.location.replace(session_url)
        }else{
            alert("Error:")
        }
    }

    useEffect(()=>{
        if(!token){
            navigate('/cart')
        }else if(getTotalCartAmount() === 0){
            navigate('/cart')
        }
    },[token])


  return (
    <form onSubmit={placeOrder} className="place-order">
        <div className="place-order-left">
            <p className="title">Delivery Information</p>
            <div className="multi-field">
                <input onChange={onChangeHandler} value={data.firstname} name="firstname" type="text" placeholder='First Name' required/>
                <input onChange={onChangeHandler} value={data.lastname} name="lastname" type="text" placeholder='First Last' required/>
            </div>
            <input onChange={onChangeHandler} value={data.email} name="email" type="email" placeholder='Email Address' required/>
            <input onChange={onChangeHandler} value={data.street} name="street" type="text" placeholder='Street' required/>
            <div className="multi-field">
                <input onChange={onChangeHandler} value={data.city} name="city" type="text" placeholder='City' required/>
                <input onChange={onChangeHandler} value={data.state} name="state" type="text" placeholder='State' required/>
            </div>
            <div className="multi-field">
                <input onChange={onChangeHandler} value={data.zipcode} name="zipcode" type="text" placeholder='Zip Code' required/>
                <input onChange={onChangeHandler} value={data.country} name="country" type="text" placeholder='Country' required/>
            </div>
            <input onChange={onChangeHandler} value={data.phone} name="phone" type="text" placeholder='Phone' required/>
        </div>
        <div className="place-order-right">
        <div className="cart-total">
                <h2>Cart Total</h2>
                <div>
                    <div className="cart-total-details">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <p>Delivery Fee</p>
                        <p>${getTotalCartAmount() === 0?0:2}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <strong>Total</strong>
                        <strong>${getTotalCartAmount() === 0?0:getTotalCartAmount() + 2}</strong>
                    </div>
                </div>
                <button type="submit">PROCEED TO PAYMENT</button>
            </div>
        </div>
    </form>
  )
}

export default PlaceOrder