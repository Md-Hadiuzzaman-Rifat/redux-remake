import { useState } from "react";
import "./App.css";
import Counter from "./assets/components/Counter/Counter";
import TotalCount from "./assets/components/TotalCount/TotalCount";

const initialState = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0,
  },
];

function App() {

  const [state,setState]=useState(initialState)

  const increment = (id) => {
    const updatedCounter = state.map((c) => {
        if (c.id === id) {
            return {
                ...c,
                count: c.count + 1,
            };
        }
        return { ...c };
    });
    setState(updatedCounter);
};
  const decrement = (id) => {
    const updatedCounter = state.map((c) => {
        if (c.id === id) {
            return {
                ...c,
                count: c.count - 1,
            };
        }
        return { ...c };
    });
    setState(updatedCounter);
};

const totalCount = () => {
  return state.reduce((total, counter) => total + counter.count, 0);
};

  return (
    <>
      <div>

        {state.map((item, data) => (
          
          <Counter
            increment={increment}
            decrement={decrement}
            item={item}
            key={data}
          />
        ))}
      </div>
      <br /> <br />
      <TotalCount totalCount={totalCount}></TotalCount>
    </>
  );
}

export default App;
