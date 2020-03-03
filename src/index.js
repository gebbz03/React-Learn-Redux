import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import allReducer from "./reducers/";
// reducers automatically find the index.js
import { Provider } from "react-redux";

const myStore = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//---------------LONG METHOD ---------------
// //STORE -> GLOBALIZED STATE

// //ACTION INCREMENT
// const increment = () => {
//   return {
//     type: "INCREMENT"
//   };
// };

// const decrement = () => {
//   return {
//     type: "DECREMENT"
//   };
// };

// //REDUCER
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return -1;
//   }
// };

// let store = createStore(counter);
// store.subscribe(() => console.log(store.getState()));

// //DISPATCH
// store.dispatch(increment());
// store.dispatch(decrement());

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
