import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/staticCounter/actions';

const StaticHookCounter = () => {
    const count= useSelector(state=>state.staticCounter.value)
    const dispatch=useDispatch()

    const incrementHandler=()=>{
        dispatch(increment())
    }
    
    const decrementHandler=()=>{
        dispatch(decrement())
    }

    return (
        <div>
            <h2 style={{color:"blue"}}>Static Hook Counter</h2>
            <h2>{count}</h2>
            <button onClick={incrementHandler} style={{marginRight:"1rem"}}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
        </div>
    );
};

export default StaticHookCounter;