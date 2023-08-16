import {SDECREMENT, SINCREMENT} from "./actionTypes"

export const increment=()=>{
    return{
        type: SINCREMENT,
    }
}
export const decrement=()=>{
    return{
        type:SDECREMENT,
    }
}