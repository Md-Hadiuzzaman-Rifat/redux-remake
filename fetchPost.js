// const fetch = require("node-fetch");
// const { applyMiddleware } = require("redux");
// const thunkMiddleware =require("redux-thunk")
// const {createStore}= require("redux")


// const initialState = {
//   loading: false,
//   error: "",
//   post: [],
// };

// // actions
// const fetchTodoRequest = () => {
//   return {
//     type: "posts/requested",
//   };
// };
// const fetchTodoSuccess = (todo) => {
//   return {
//     type: "posts/success",
//     payload: todo,
//   };
// };
// const fetchError = (error) => {
//   return {
//     type: "posts/error",
//     payload: error,
//   };
// };

// // reducer
// const fetchReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "posts/requested":
//       return {
//         ...state,
//         loading: true,
//         error: "",
//         posts: [],
//       };
//     case "posts/success":
//       return {
//         ...state,
//         loading: false,
//         error: "",
//         posts: [...state.post, ...action.payload],
//       };
//     case "posts/error":
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//         posts: [],
//       };
//     default:
//       break;
//   }
// };


// // fetchPosts
// const fetchPost = () => {
//   return async (dispatch) => {
//     dispatch(fetchTodoRequest());

//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       const data = await response.json();
//       dispatch(fetchTodoSuccess(data))
//     } catch (err) {
//         dispatch(fetchError(err))
//     }
//   };
// };

// const store= createStore(fetchReducer, applyMiddleware(thunkMiddleware.default))

// store.subscribe(()=>{
//   console.log(store.getState());
// })

// store.dispatch(fetchPost())


////////////////////////////////////////////////
///////////////// RTK Redux ////////////////////
////////////////////////////////////////////////


const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require('node-fetch')

const initialState={
  loading:false, 
  posts:[],
  error:''
}

// create async thunk 
const fetchPosts=createAsyncThunk("posts/fetchPost",async()=>{
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const posts=await response.json()
  return posts
})

// create slice
const postSlice=createSlice({
  name: 'post',
  initialState,
  extraReducers:(builder)=>{
    builder.addCase(fetchPosts.pending,(state,action)=>{
      state.loading= true,
      state.error=""
    })

    builder.addCase(fetchPosts.fulfilled,(state,action)=>{
      state.loading=false,
      state.posts=action.payload
    })


    builder.addCase(fetchPosts.rejected,(state,action)=>{
      state.loading=false,
      state.error=action.payload
    })
  }
})

module.exports=postSlice.reducer
module.exports.fetchPosts= fetchPosts