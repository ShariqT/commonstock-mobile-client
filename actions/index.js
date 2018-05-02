export const ADD_TO_CART = 'ADD_TO_CART'

export function addItemToCart(item){
    console.log('inside of the action...')
    console.log(item)
    return {
        type: ADD_TO_CART,
        item
    }
}

