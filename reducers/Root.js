import { cartReducer } from './Cart'
import { listReducer } from './List'
import { combineReducers } from 'redux'

const RootReducer = combineReducers({
    cart: cartReducer,
    foodlist: listReducer 
})

export default RootReducer