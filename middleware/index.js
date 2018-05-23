import { grantUserAccess, navToScreen, loadUser, loadError } from '../actions'
import fetch from 'cross-fetch'
const apiUrl = "https://commonstockfood2.herokuapp.com/api/v1/";
export default ApiMiddleware = store => next => action =>{
    switch(action.type){
        case "API_SIGNUP":
            console.log("aobut to grant acess based on what is returned from the thunk...")
            return next(grantUserAccess())
        break;
        case "API_LOGIN":
            console.log("logging in user")
            console.log(action.user);
            fetch(apiUrl + "login",{
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(action.user)
            }).then((response) => {
                switch(response.status){
                    case 200:
                        return next(loadUser({username: "ddd"}))
                    break;
                    case 401:
                        return next(loadError("wrong login"))
                    break;
                    case 500:
                        return next(loadError("temporaryliy unavailable"))
                    break;
                }
            }, (error) => {
                console.log(error)
                return next(loadError(error.message))
            });
        break;
        default:
            return next(action)
    }
}