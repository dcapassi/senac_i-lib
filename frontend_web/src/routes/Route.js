import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { usuarioLogado } from "../Pages/Login";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...resto
}) {
  console.log(`Logado: ${usuarioLogado}`);
  const logado = usuarioLogado;

  if (!logado && isPrivate) {
    return <Redirect to="/" />;
  }
  if (logado && !isPrivate) {
    return <Redirect to="/MenuPrincipal" />;
  }

  return <Route {...resto} component={Component} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
