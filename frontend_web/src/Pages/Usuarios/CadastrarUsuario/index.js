import React, { Component } from "react";
import Header from "../../../Components/Header";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

import { FormUsuarios } from "./styles";

export default class CadastrarUsuario extends Component {
  render() {
    return (
      <>
        <Header />
        <FormUsuarios>
          <div>
            <Link to="/MenuPrincipal">
              <IoIosArrowBack size={"50px"} />
            </Link>
            <h1>Cadastrar Usuários</h1>
          </div>
          <div>
            <form>
              <label>
                Nome:
                <input type="text" />
              </label>
              <label>
                Email:
                <input type="text" />
              </label>
              <label>
                CPF:
                <input type="text" />
              </label>
              <label>
                Tipo:
                <select>
                  <option value="0">Aluno</option>
                  <option value="1">Professor</option>
                  <option value="1">Funcionário</option>
                  <option value="1">Administrador</option>
                </select>
              </label>
              <button type="submit">Cadastrar</button>
            </form>
          </div>
        </FormUsuarios>
      </>
    );
  }
}
