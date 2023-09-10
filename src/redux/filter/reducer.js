import {COLORCHANGED, STATUSCHANGED} from "./actionType"
import initialState from "./initialState"

const reducer=(state=initialState,action)=>{

    switch (action.type){

        case COLORCHANGED:
            const {color,changeType}=action.payload
            
            switch(changeType){
                case "added":
                    return{
                        ...state,
                        color:[...state.color, color]
                    }
                case "removed":
                    return{
                        ...state, 
                        color: state.color.filter(existingColor=>existingColor !== color)
                    }

                default:
                    return state;

            }
            
            case STATUSCHANGED:
                return{
                    ...state,
                    status:action.payload

                }
                default:
                    return state
    }
}
export default reducer