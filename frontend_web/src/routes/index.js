import React from "react";
import { Switch } from "react-router-dom";
import Route from "../routes/Route";

import Login from "../../src/Pages/Login";
import MenuPrincipal from "../../src/Pages/MenuPrincipal";
import CadastrarUsuario from "../../src/Pages/Usuarios/CadastrarUsuario";
import CadastrarISBN from "../../src/Pages/Livros/ISBN/CadastrarISBN";
import CadastrarLivro from "../../src/Pages/Livros/LIVRO/CadastrarLivro";
import CadastrarSala from "../Pages/Salas/CadastrarSala";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/MenuPrincipal" component={MenuPrincipal} isPrivate={true} />
      <Route
        path="/CadastrarUsuario"
        component={CadastrarUsuario}
        isPrivate={true}
      />
      <Route path="/CadastrarISBN" component={CadastrarISBN} isPrivate={true} />
      <Route
        path="/CadastrarLivro"
        component={CadastrarLivro}
        isPrivate={true}
      />
      <Route path="/CadastrarSala" component={CadastrarSala} isPrivate={true} />
    </Switch>
  );
}
