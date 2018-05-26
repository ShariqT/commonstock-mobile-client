
export default function userReducer(intialState = {}, action){
    switch(action.type){
        case "LOAD_USER":
            console.log("loading the new user")
            console.log(action.user)
            return action.user
        break;
        default:
            return intialState
        break;
    }
}