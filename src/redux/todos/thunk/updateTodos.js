import {toggled} from "../../todos/actions" 

const updateTodos=(todoId, currentStatus)=>{
    return async(dispatch)=>{

        const response=await fetch(`http://localhost:9000/todos/${todoId}`,{
            method: "PATCH",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify({ 
                completed: !currentStatus
            })
        })
        const todo=await response.json()
        dispatch(toggled(todo.id))
    }
}
export default updateTodos