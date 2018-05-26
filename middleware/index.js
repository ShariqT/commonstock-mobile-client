import { grantUserAccess, navToScreen, loadUser, loadError, loadFoodlist } from '../actions'
import fetch from 'cross-fetch'
const apiUrl = "https://commonstockfood2.herokuapp.com/api/v1/";
export default ApiMiddleware = store => next => action =>{
    switch(action.type){
        case "API_SIGNUP":
            console.log("aobut to grant acess based on what is returned from the thunk...")
            return next(grantUserAccess())
        break;
        case "API_FOODLIST":
            console.log("fetching the foodlist")
            console.log(action)
            let urlStr = "nearby_stores?lat="+action.lat;
            urlStr += "&long="+action.long;
            urlStr += "&radius="+action.radius;

            fetch(apiUrl + urlStr,{
                headers: {"Authorization": "Bearer " + action.token }
            }).then((response) => {
                
                if(response.status == 200 ){
                    console.log("success in getting foodlist")
                    response.json().then((val)=>{
                        return next(loadFoodlist(val.foodlist))
                    })
                }else{
                    console.log(apiUrl + urlStr);
                    console.log("error in getting foodlist")
                    return next(loadError("Sorry! Something has gone wrong! Please try again later"))
                }
            }, (error) => {
                return next(loadError(error.message))
            })
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
                        return next(loadUser(response.json()))
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