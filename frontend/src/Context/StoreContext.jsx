import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItem, setCartItem] = useState({})
    const url = 'http://localhost:4000';
    const [token, setToken] = useState("")
    const [food_list, setFoodList] = useState([])


    const addToCart = async (itemId) => {
        if(!cartItem[itemId]){
            setCartItem((prev)=>({...prev,[itemId]:1}))
        }else{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if(token){
            await axios.post(url+"/api/cart/add", {itemId},{headers:{token}})
        }
    }

    const removeCart = async (itemId) => {
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(token){
            await axios.post(url+"/api/cart/remove", {itemId},{headers:{token}})
        }
    }

    const loadCartData = async (token) => {
        const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
        setCartItem(response.data.cartData)
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0
        for(const item in cartItem){
            if(cartItem[item]>0){
                let itemInfo = food_list.find((product)=> product._id === item)
                totalAmount += itemInfo.price * cartItem[item]
            }
        }
        return totalAmount
    }

    const fetchFoodList = async () => {
        const response = await axios.get(url+"/api/food/list")
        setFoodList(response.data.data)
    }

    useEffect(()=>{
        async function loadData(){
            await fetchFoodList()
            const getToken = localStorage.getItem('token')
            if(getToken){
                setToken(getToken)
                await loadCartData(localStorage.getItem("token"))
            }
        }
        loadData()
    },[])

    const contextValue = {
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider