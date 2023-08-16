import staticCounterReducer from "./staticCounter/staticCounterReducer"
import counterReducer from "./counter/counterReducer"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    counter: counterReducer,
    staticCounter: staticCounterReducer
})
export default rootReducer 