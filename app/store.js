const {configureStore}= require('@reduxjs/toolkit')
const counterSlice =require("./counterSlice")
const {createLogger} =require("redux-logger")

const logger= createLogger()

const store=configureStore({
    reducer:{
        counter: counterSlice
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})
module.exports = store