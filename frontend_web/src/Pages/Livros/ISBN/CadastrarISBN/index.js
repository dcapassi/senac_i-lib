import React, { Component } from "react";
import Header from "../../../../Components/Header";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import api from "../../../../services/api";

import { FormISBN, MessageBox } from "./styles";

class CadastrarISBN extends Component {
  closeMessage = async (e) => {
    document.getElementById("messageBox").style.display = "none";
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    let nome_livro = document.getElementById("inputNome").value;
    let autor = document.getElementById("inputAutor").value;
    let editora = document.getElementById("inputEditora").value;
    let idioma = document.getElementById("inputIdioma").value;
    let isbn = document.getElementById("inputISBN").value;

    const { user } = this.props;
    const data = await api
      .post(
        "/isbn",
        {
          nome_livro,
          autor,
          editora,
          idioma,
          isbn,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then(function (response) {
        document.getElementById("spanNome").innerText = nome_livro;
        document.getElementById("spanAutor").innerText = autor;
        document.getElementById("spanEditora").innerText = editora;
        document.getElementById("spanIdioma").innerText = idioma;
        document.getElementById("spanISBN").innerText = isbn;
        document.getElementById("messageBox").style.display = "block";
      });
  };

  render() {
    return (
      <>
        <Header />
        <MessageBox id="messageBox" onClick={this.closeMessage}>
          <div id="tittle">
            <h1>ISBN criada com sucesso</h1>
          </div>
          <div id="message">
            <div>
              <strong>Nome do Livro:&nbsp;</strong>
              <span id="spanNome"></span>
            </div>
            <div>
              <strong>Autor:&nbsp;</strong>
              <span id="spanAutor"></span>
            </div>
            <div>
              <strong>Editora:&nbsp;</strong>
              <span id="spanEditora"></span>
            </div>
            <div>
              <strong>Idioma:&nbsp;</strong>
              <span id="spanIdioma"></span>
            </div>
            <div>
              <strong>ISBN:&nbsp;</strong>
              <span id="spanISBN"></span>
            </div>
          </div>
        </MessageBox>
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
                <input autocomplete="off" id="inputNome" type="text" />
              </label>
              <label>
                Autor:
                <input autocomplete="off" id="inputAutor" type="text" />
              </label>
              <label>
                Editora:
                <input autocomplete="off" id="inputEditora" type="text" />
              </label>
              <label>
                Idioma:
                <input autocomplete="off" id="inputIdioma" type="text" />
              </label>
              <label>
                ISBN:
                <input autocomplete="off" id="inputISBN" type="text" />
              </label>
              <button type="buton" onClick={this.handleSubmit}>
                Cadastrar
              </button>
            </form>
          </div>
        </FormISBN>
      </>
    );
  }
}
const mapState = (state) => ({
  user: state.user,
});
export default connect(mapState)(CadastrarISBN);
