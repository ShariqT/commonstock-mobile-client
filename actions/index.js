import { NavigationActions } from 'react-navigation';

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_CART = 'REMOVE_CART'
export const LOAD_FOODLIST = 'LOAD_FOODLIST'
export const USER_ACCESS = 'USER_ACCESS'
export const SIGNUP_SCREEN = 'SIGNUP_SCREEN'

export function addItemToCart(item){
        return {
            type: ADD_TO_CART,
            item
        }
}

export function removeCartItem(key){
        return {
            type: REMOVE_CART,
            key
        }
}

export function signUpUser(usr){
        return {
            type: 'API_SIGNUP',
            user: usr
        }
    
}
export function grantUserAccess(){
        return {
            type: USER_ACCESS,
            access: true
        }
}

export function loginUser(usr){
    console.log("login user")
    console.log(usr)
    return {
        type: 'API_LOGIN',
        user: usr
    }
}

export function loadUser(user){
    return{
        type: 'LOAD_USER',
        access: true,
        user,

    }
}

export function getFoodlist(){
    
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
        return {
            type: LOAD_FOODLIST,
            list: dat
        }
    
}


export function loadError(errorMsg){
    return {
        type: "ERROR",
        message: errorMsg
    }
}