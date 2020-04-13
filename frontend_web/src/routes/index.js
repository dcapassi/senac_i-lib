import React from "react";
import { Switch } from "react-router-dom";
import Route from "../routes/Route";

import Login from "../../src/Pages/Login";
import MenuPrincipal from "../../src/Pages/MenuPrincipal";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/MenuPrincipal" component={MenuPrincipal} isPrivate="true" />
    </Switch>
  );
}
