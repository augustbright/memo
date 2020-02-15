import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import {} from 'react-router';
import configureStore from "./redux/configure";

const store = configureStore({
  browser: {},
  files: {},
  filesStatuses: {}
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);