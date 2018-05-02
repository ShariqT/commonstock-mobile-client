export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_CART = 'REMOVE_CART'
export const LOAD_FOODLIST = 'LOAD_FOODLIST'

export function addItemToCart(item){
    console.log('inside of the action...')
    console.log(item)
    return (dispatch) => {
        return dispatch({
            type: ADD_TO_CART,
            item
        })
    }
}

export function removeCartItem(key){
    return (dispatch) => {
        return dispatch({
            type: REMOVE_CART,
            key
        })
    }
}

export function getFoodlist(){
    return(dispatch) => {
        let dat = [
            {
                'username': '@SellerUsername',
                'key':1,
                'url':'Nachos',
                'num_of_likes':112,
                'price':4.25,
                'name': 'Nachos'
            }
        ]
        return dispatch({
            type: LOAD_FOODLIST,
            list: dat
        })
    }
}
