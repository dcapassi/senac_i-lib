import React, { Component } from "react";
import Header from "../../../../Components/Header";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

import { FormISBN } from "./styles";

export default class CadastrarISBN extends Component {
  render() {
    return (
      <>
        <Header />
        <FormISBN>
          <div>
            <Link to="/MenuPrincipal">
              <IoIosArrowBack size={"50px"} />
            </Link>
            <h1>Cadastrar ISBN</h1>
          </div>
          <div>
            <form>
              <label>
                Nome do Livro:
                <input type="text" />
              </label>
              <label>
                Autor:
                <input type="text" />
              </label>
              <label>
                Editora:
                <input type="text" />
              </label>
              <label>
                Idioma:
                <input type="text" />
              </label>
              <label>
                ISBN:
                <input type="text" />
              </label>
              <button type="buton">Cadastrar</button>
              <button type="buton">Mostrar QR-Code</button>
            </form>
          </div>
        </FormISBN>
      </>
    );
  }
}
