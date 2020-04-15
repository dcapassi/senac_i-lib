import React, { Component } from "react";
import Header from "../../../../Components/Header";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

import { FormLivro } from "./styles";

export default class CadastrarLivro extends Component {
  render() {
    return (
      <>
        <Header />
        <FormLivro>
          <div>
            <Link to="/MenuPrincipal">
              <IoIosArrowBack size={"50px"} />
            </Link>
            <h1>Cadastrar Livro</h1>
          </div>
          <div>
            <form>
              <label>
                ID:
                <input type="text" />
              </label>
              <label>
                ISBN:
                <input type="text" />
              </label>

              <button type="buton">Cadastrar</button>
            </form>
          </div>
        </FormLivro>
      </>
    );
  }
}

