import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/counter/actions";

function HookCounter() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const incrementHandler = (value) => {
    dispatch(increment(value));
  };

  const decrementHandler = (value) => {
    dispatch(decrement(value));
  };

  return (
    <div>
        <h2 style={{color:"blue"}}>Hook Component</h2>
        <h2>{count}</h2>
      <div>
        <button style={{marginRight:"1rem"}} onClick={() => incrementHandler(5)}>Increment</button>
        <button onClick={() => decrementHandler(2)}>Decrement</button>
      </div>
    </div>
  );
}

export default HookCounter;
