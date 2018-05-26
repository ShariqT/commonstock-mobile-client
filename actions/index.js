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
    console.log("load user action")
    console.log(user)
    return{
        type: 'LOAD_USER',
        access: true,
        user,

    }
}

export function getFoodlist(lat, long, radius, token){
        return {
            type: 'API_FOODLIST',
            lat,
            long,
            radius,
            token
        }
        
        
    
}

export function loadFoodlist(list){
    return {
        type: "LOAD_FOODLIST",
        list
    }
}
export function loadError(errorMsg){
    return {
        type: "ERROR",
        message: errorMsg
    }
}

export function resetError(){
    return {
        type: "ERROR_RESET"
    }
}