import { LOAD_FOODLIST } from '../actions/index'

initialState = []
export function listReducer(state = initialState, action){
    switch(action.type){
        case LOAD_FOODLIST:
            return []
        break;
        default:
            return state
    }
}
