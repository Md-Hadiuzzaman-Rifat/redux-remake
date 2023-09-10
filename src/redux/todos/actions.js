import {ADDED, ALLCOMPLETED, TOGGLED, CLEARCOMPLETED , COLORSELECTED, DELETED} from "./actionTypes"


export const added=(todoText)=>{
    return{
        type: ADDED,
        payload: todoText
    }
}
 
export const toggled=(todoId)=>{
    return{
        type: TOGGLED,
        payload: todoId
    }
}

export const colorSelected=(todoId, color)=>{
    return{
        type: COLORSELECTED,
        payload:{
            todoId, 
            color
        }
    }
}

export const deleted=(todoId)=>{
    return{
        type: DELETED
    }
}

export const allCompleted=()=>{
    return{
        type: ALLCOMPLETED, 
    }
}

export const clearCompleted=()=>{
    return{
        type: CLEARCOMPLETED
    }
}