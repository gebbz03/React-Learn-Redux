import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector(state => state.counter);
  const loggedIn = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      {/* <button onClick={() => dispatch(increment())}>+</button> */}
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {loggedIn ? <h1>Logged In </h1> : ""}
    </div>
  );
}

export default App;
