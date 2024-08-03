import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
   
 const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) =>{
            const existingItems = state.cart.find( (item) => item.id === action.payload.id)

            if(existingItems){
                state.cart = state.cart.map((item) => 
                    item.id === action.payload.id ? {... item, quantity : item.quantity + 1} : item )
            }else {
                state.cart.push(action.payload)
            }
        },
        removeFromCart: (state, action) =>{
            state.cart = state.cart.filter((item) => item.id !== action.payload.id)
        },
        incrementquantity: (state,action) =>{
            state.cart = state.cart.map((item) => 
                item.id === action.payload.id ? {... item, quantity : item.quantity + 1} : item )
        },
        decrementquantity: (state, action) =>{
            state.cart = state.cart.map((item) => 
                item.id === action.payload.id ? {... item, quantity : item.quantity - 1} : item )
        }
    },
 })
 export const {addToCart, removeFromCart, incrementquantity, decrementquantity} = CartSlice.actions
 export default CartSlice.reducer