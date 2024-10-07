import { createSlice } from '@reduxjs/toolkit'
import {produce} from 'immer'
// Use Produce Method

// Action type

export const ADD_CART_ITEM = 'cart/addItems'
export const REMOVE_CART_ITEM = 'cart/removeItems'
export const INCREASE_CART_ITEM = 'cart/increaseQuantityItems'
export const DECREASE_CART_ITEM = 'cart/decreaseQuantityItems'
// ducks pattern 
// Action Creator
export function addCartItem (productData){
    return {type:ADD_CART_ITEM,payload:productData}
}
export function removeCartItem (Id){
    return {type:REMOVE_CART_ITEM,payload:{productId:Id}}
}
export function increaseCartItem (Id){
    return {type:INCREASE_CART_ITEM,payload:{productId:Id}}
}
export function decreaseCartItem (Id){
    return {type:DECREASE_CART_ITEM,payload:{productId:Id}}
}

// Reducer
export function cartReducer (originalState = [],action){//state change in originalState because use produce
    return produce(originalState,(state) =>{
        const existingItemIndex = state.findIndex((item) => item.productId === action.payload.productId)
switch(action.type){
        case ADD_CART_ITEM:
            if(existingItemIndex !== -1){
                console.log(existingItemIndex)
                state[existingItemIndex].quantity += 1
                break;
            }
            state.push({...action.payload,quantity:1})
            break;

        case REMOVE_CART_ITEM:
            state.splice(existingItemIndex,1)
            break;

        case INCREASE_CART_ITEM:
            state[existingItemIndex].quantity += 1
                break;
                
        case DECREASE_CART_ITEM:
            state[existingItemIndex].quantity -= 1
            if( state[existingItemIndex].quantity === 0){
                state.splice(existingItemIndex,1)
            }
            break;
    }
    return state;
})
}


createSlice({
    name: 'cart',
    initialState : [],
    // reducer : ,
})