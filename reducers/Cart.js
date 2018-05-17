import { ADD_TO_CART, REMOVE_CART } from '../actions/index'
initalCart = []
export function cartReducer(state = initalCart, action){
    console.log("inside the cart reducer. the state is -- ")
    console.log(state)

    console.log("the action is ")
    console.log(action)
    switch(action.type){
        case ADD_TO_CART:
           let newCart = [].concat(state, action.item).map((v, idx) => {
                return { ...v, key: idx}
           })
           console.log("adding to state")
           console.log(action.item)
           return newCart
           break;
        case REMOVE_CART:
            let newCt = state
            console.log('removing from state')
            console.log(action.key)
            if (newCt.length > 1){
                return newCt.slice(0,action.key).concat(newCt.slice(action.key+1))
            }else{
                return []
            }
        default:
            return state
    }
}