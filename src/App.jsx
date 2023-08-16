import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import HookCounter from "./components/HookCounter";
import store from "./redux/store"
const App = () => {
  return (
    <Provider store={store}>
      <HookCounter></HookCounter>
    </Provider>
  );
};

export default App;
