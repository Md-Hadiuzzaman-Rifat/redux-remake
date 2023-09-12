const { createStore } = require("redux")
const fetch= require("node-fetch")
const thunkMiddleware= require("redux-thunk")
const {applyMiddleware}=require ("redux")

// initialState
const initialState={
  loading: false,
  posts:[],
  error:""
}

// action 
const fetchLoading=()=>{
  return{
    type: "loading"
  }
}

const fetchPosts=(posts)=>{
  return{
    type:"success",
    payload:posts
  }
}

const fetchError=(error)=>{
  return{
    type:"error",
    payload: error
  }
}

// reducer
const reducer=(state=initialState, action)=>{
    switch(action.type){
      case "loading":
        return{
          ...state,
          loading: true,
          posts:[],
          error:""
        }
        case "success":
          return{
            ...state,
            loading:false,
            posts: action.payload,
            error: ""
          }
          case "error":
            return{
              ...state,
              loading:false, 
              posts:"",
              error: action.payload
            }
            default :
            break
    }
}


const fetchPostThunk=()=>{
  return async(dispatch)=>{
    dispatch(fetchLoading())

    try{
      const response=await fetch("https://jsonplaceholder.typicode.com/users")

      const posts= await response.json()
      dispatch(fetchPosts(posts))
    }catch(err){
      dispatch(fetchError(err))
    }
  }
}

const store=createStore(reducer,applyMiddleware(thunkMiddleware.default))


store.subscribe(()=>{
  console.log(store.getState());
})

store.dispatch(fetchPostThunk())