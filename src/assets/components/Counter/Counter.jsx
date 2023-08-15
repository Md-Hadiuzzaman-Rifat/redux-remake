
const Counter = (state) => {

    const {increment, decrement}=state 

    return (
        <div>
            <h2 style={{color:"blue"}}>Counter {state.item.id}</h2>
            <h2>{state.item.count}</h2>
            <button onClick={()=>increment(state.item.id)} style={{marginRight:"2rem"}}>Increment</button>
            
            <button onClick={()=>decrement(state.item.id)}>Decrement</button>
        </div>
    );
};

export default Counter;