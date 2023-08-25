const { createStore, applyMiddleware } = require("redux");
const {fetchMiddleware} =require('./middleWare')
const {fetchTodos} =require('./function')

const initialState = {
  todo: [], 
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "todo/loaded":
      return {
        ...state,
        todo: [...state.todo, ...action.payload],
      };
      default:
        return state
  }
};

const store=createStore(reducer, applyMiddleware(fetchMiddleware))

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(fetchTodos)