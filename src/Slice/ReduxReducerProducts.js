import React from 'react'
import { productReducer } from './ProductSlice'
import {  cartReducer } from './CartSlice'
import { wishListReducer } from './WishlistSlice'
import { combineReducers, createStore } from 'redux'




const reducer = combineReducers({
       products : productReducer,
       cartItems: cartReducer,
       wishList :wishListReducer,
})

  export const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    // console.log(store.getState())

// short way of dispatching

    // store.dispatch(addCartItem(1,5))
    // store.dispatch(addCartItem(2,10))
    // store.dispatch(addCartItem(3,15))
    // store.dispatch(removeCartItem(3))
    // store.dispatch(increaseCartItem(2))
    // store.dispatch(increaseCartItem(2))
    // store.dispatch(decreaseCartItem(1))
    // store.dispatch(addWishlistItem (1,2))
    // store.dispatch(addWishlistItem (2,4))
    // store.dispatch(addWishlistItem (3,6))
    // store.dispatch(removeWishlistItem(1))
 
    

    // store.dispatch({type:ADD_CART_ITEM,payload:{productId:10,quantity:1}})
    // store.dispatch({type:ADD_CART_ITEM,payload:{productId:12,quantity:1}})
    // store.dispatch({type:ADD_CART_ITEM,payload:{productId:6,quantity:1}})
    // store.dispatch({type:REMOVE_CART_ITEM,payload:{productId:6}})
    // store.dispatch({type:INCREASE_CART_ITEM,payload:{productId:12}})
    // store.dispatch({type:DECREASE_CART_ITEM,payload:{productId:10}})
    // store.dispatch({type:ADD_WISHLIST_ITEM,payload:{productId:1,wishListCount:1}})
    // store.dispatch({type:ADD_WISHLIST_ITEM,payload:{productId:10,wishListCount:1}})
    // store.dispatch({type:ADD_WISHLIST_ITEM,payload:{productId:12,wishListCount:1}})
    // store.dispatch({type:REMOVE_WISHLIST_ITEM,payload:{productId:12}})
  