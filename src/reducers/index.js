import * as types from '../constants/ActionTypes'

export default (state = [0,0], action) => {
    switch (action.type) {
        case types.INCREMENT:{
            const newState = [...state]
            newState[action.index]++
            return newState;
        }
            
        case types.DECREMENT:
        {
            const newState = [...state]
            newState[action.index]--
            return newState;
        }
        case types.MULTIPLICATION:
        {
            const newState = [...state]
            newState[action.index] *= action.num;
            return newState;
        } 
        default:
            return state
    }
}