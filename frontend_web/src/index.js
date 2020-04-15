import React from "react";
import ReactDOM from "react-dom";
import Login from "../src/Pages/Login";
import Routes from "../src/routes";
import { Router } from "react-router-dom";
import history from "../src/services/history";
import { Provider } from "react-redux";
import "./config/ReactotronConfig";

import store from "./store";

var usuarioLogado = false;

ReactDOM.render(
  <>
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  </>,
  document.getElementById("root")
);

export var usuarioLogado;
