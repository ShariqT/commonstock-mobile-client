

export default function errorReducer(initalState = {}, action){
    console.log("inside of the error reducer")
    console.log(action)
    switch(action.type){
        case "ERROR":
            return {
                message:action.message
            }
        break;
        case "ERROR_RESET":
            return {}
        break;
        default:
            return {}
        break;
    }
}