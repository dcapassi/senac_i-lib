import React, { Component } from "react";
import Header from "../../../Components/Header";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

import { FormSala } from "./styles";

export default class CadastrarSala extends Component {
  render() {
    return (
      <>
        <Header />
        <FormSala>
          <div>
            <Link to="/MenuPrincipal">
              <IoIosArrowBack size={"50px"} />
            </Link>
            <h1>Cadastrar Sala</h1>
          </div>
          <div>
            <form>
              <label>
                Número:
                <input type="number" />
              </label>
              <label>
                Localização:
                <input type="text" />
              </label>
              <label>
                Descrição:
                <input type="text" />
              </label>

              <button type="buton">Cadastrar</button>
            </form>
          </div>
        </FormSala>
      </>
    );
  }
}
