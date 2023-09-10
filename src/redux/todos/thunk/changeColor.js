import {colorSelected} from "../../todos/actions"

const changeColor=(todoId,color)=>{
    return async(dispatch)=>{
        const response = await fetch(`http://localhost:9000/todos/${todoId}`,{
            method:"PATCH",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                color:color
            })
        })
        const data=await response.json()
        dispatch(colorSelected(data.id, data.color))
    }
}
export default changeColor