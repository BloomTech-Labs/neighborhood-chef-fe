import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./utilities/reducers";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { BrowserRouter } from "react-router-dom";
// import * as serviceWorker from "./serviceWorker";

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
