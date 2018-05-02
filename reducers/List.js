import { LOAD_FOODLIST } from '../actions/index'

initialState = []
export function listReducer(state = initialState, action){
    switch(action.type){
        case LOAD_FOODLIST:
            return action.list
        break;
        default:
            return state
    }
}
