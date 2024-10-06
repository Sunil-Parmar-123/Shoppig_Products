    // Action type

    export const ADD_WISHLIST_ITEM = 'wishList/addItems'
    export const REMOVE_WISHLIST_ITEM = 'wishList/removeItems'

    // ducks pattern
    // Action Creator 
    export function addWishlistItem (Id,count){
        return {type:ADD_WISHLIST_ITEM,payload:{productId:Id,wishListCount:count}}
    }
    export function removeWishlistItem (Id){
        return {type:REMOVE_WISHLIST_ITEM,payload:{productId:Id}}
    }
  
    // Reducer
    export function wishListReducer (state = [],action) {
        switch(action.type){
            case ADD_WISHLIST_ITEM:
                return [...state,action.payload]
            case REMOVE_WISHLIST_ITEM:
                return state.filter((wish)=> wish.productId !== action.payload.productId)
            default:
            return state;
        }
}

    // normal pattern but this is not understanding pattern

    // let store = createStore(wishListReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    // console.log(store)

    // store.dispatch({type:ADD_WISHLIST_ITEM,payload:{productId:1,wishListCount:1}})
    // store.dispatch({type:ADD_WISHLIST_ITEM,payload:{productId:10,wishListCount:1}})
    // store.dispatch({type:ADD_WISHLIST_ITEM,payload:{productId:12,wishListCount:1}})
    // store.dispatch({type:REMOVE_WISHLIST_ITEM,payload:{productId:12}})


  