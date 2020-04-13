import React from "react";
import ReactDOM from "react-dom";
import Login from "../src/Pages/Login";
import Routes from "../src/routes";
import { Router } from "react-router-dom";
import history from "../src/services/history";
var usuarioLogado = false;

ReactDOM.render(
  <Router history={history}>
    <Routes />
  </Router>,
  document.getElementById("root")
);

export var usuarioLogado
