
export default function userReducer(intialState = {}, action){
    switch(action.type){
        case "LOAD_USER":
            return action.user
        break;
        default:
            return intialState
        break;
    }
}