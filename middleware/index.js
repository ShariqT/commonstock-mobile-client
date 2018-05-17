import { grantUserAccess, navToScreen } from '../actions'

export default ApiMiddleware = store => next => action =>{
    switch(action.type){
        case "API_SIGNUP":
            console.log("aobut to grant acess based on what is returned from the thunk...")
            return next(grantUserAccess())
        break;
        default:
            return next(action)
    }
}