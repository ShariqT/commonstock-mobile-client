import { USER_ACCESS } from '../actions/index'

export default function accessReducer(initialState = false, action){
    switch (action.type){
        case USER_ACCESS:
            return action.access
            break;
        default:
            return initialState
    }
}