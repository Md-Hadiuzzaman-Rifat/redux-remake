const fetch =require("node-fetch")

const fetchTodos=async(dispatch, getState)=>{

        const response =await fetch("https://jsonplaceholder.typicode.com/users")
        const data=await response.json()

        dispatch({
            type:"todo/loaded",
            payload: data
        })
        console.log(`Number of updated todos`);

}
module.exports={
    fetchTodos
}