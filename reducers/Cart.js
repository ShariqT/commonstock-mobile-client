import { ADD_TO_CART } from '../actions/index'
initalCart = []
export function cartReducer(state = initalCart, action){
    console.log("inside the cart reducer. the state is -- ")
    console.log(state)

    console.log("the action is ")
    console.log(action)
    switch(action.type){
        case ADD_TO_CART:
           const newCart = state
           console.log("adding to state")
           console.log(action.item)
           return [].concat(newCart, action.item)
           break;
        default:
            return state
    }
}