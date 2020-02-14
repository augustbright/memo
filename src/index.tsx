import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import configureStore from "./redux/configure";

const store = configureStore({
  browser: {
    owner: 'augustbright',
    repository: 'memo',
    branch: 'master',
    path: ''
  },
  files: {},
  filesStatuses: {}
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);