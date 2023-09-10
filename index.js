const {counterActions} =require('./app/counterSlice')
const store = require("./app/store")

const {increment,decrement}=counterActions 

store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(decrement())
