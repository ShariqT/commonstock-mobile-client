import { cartReducer } from './Cart'
import { listReducer } from './List'
import accessReducer from './Access'
import { combineReducers } from 'redux'

const RootReducer = combineReducers({
    cart: cartReducer,
    foodlist: listReducer,
    access: accessReducer 
})

export default RootReducer