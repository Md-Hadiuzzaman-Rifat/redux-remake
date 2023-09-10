import {combineReducers} from "redux";
import filterReducer from "./filter/reducer" 
import todoReducer from "./todos/reducer"

const rootReducer =combineReducers({
    filter:filterReducer,
    todo:todoReducer
})
export default rootReducer