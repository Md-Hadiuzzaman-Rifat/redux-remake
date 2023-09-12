const store = require('./app/store')
const {counterAction} =require('./counter')
const {dynamicCounterAction} =require('./dynamicCounter')


store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(counterAction.increment())
// store.dispatch(counterAction.decrement())

// store.dispatch(dynamicCounterAction.dynamicIncrement())
// store.dispatch(dynamicCounterAction.dynamicIncrement())