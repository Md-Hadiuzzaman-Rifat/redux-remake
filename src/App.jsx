import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import HookCounter from "./components/HookCounter";
import store from "./redux/store"
import StaticHookCounter from "./components/StaticHookCounter"
const App = () => {
  return (
    <Provider store={store}>
      <HookCounter></HookCounter>
      <br />
      <StaticHookCounter></StaticHookCounter>
    </Provider>
  );
};

export default App;
