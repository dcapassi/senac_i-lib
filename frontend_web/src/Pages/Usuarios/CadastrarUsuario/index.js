import React, { Component } from "react";
import Header from "../../../Components/Header";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { extname, resolve } from "path";
import crypto from "crypto";
import { FormUsuarios, MessageBox } from "./styles";
import api from "../../../services/api";

export default class CadastrarUsuario extends Component {
  closeMessage = async (e) => {
    document.getElementById("messageBox").style.display = "none";
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    let nome = document.getElementById("inputNome").value;
    let email = document.getElementById("inputEmail").value;
    let cpf = document.getElementById("inputCPF").value;
    let tipo = document.getElementById("selectTipo").value;

    let senhaAleatoria = Math.random().toString(30).substring(2);

    const data = await api
      .post("/cadastros", {
        nome,
        email,
        cpf,
        senha: senhaAleatoria,
        tipo,
      })
      .then(function (response) {
        console.log(`Senha gerada: ${senhaAleatoria}`);
        console.log(response);

        document.getElementById("spanUsuario").innerText = nome;
        document.getElementById("spanEmail").innerText = email;
        document.getElementById("spanCPF").innerText = cpf;
        document.getElementById("spanSenha").innerText = senhaAleatoria;
        document.getElementById("spanTipo").innerText = tipo;

        document.getElementById("messageBox").style.display = "block";
      });
  };

  render() {
    return (
      <>
        <Header />
        <MessageBox id="messageBox" onClick={this.closeMessage}>
          <div id="tittle">
            <h1>Usuário criado com sucesso</h1>
          </div>
          <div id="message">
            <div>
              <strong>Usuário:&nbsp;</strong>
              <span id="spanUsuario"></span>
            </div>
            <div>
              <strong>Email:&nbsp;</strong>
              <span id="spanEmail"></span>
            </div>
            <div>
              <strong>CPF:&nbsp;</strong>
              <span id="spanCPF"></span>
            </div>
            <div>
              <strong>Tipo:&nbsp;</strong>
              <span id="spanTipo"></span>
            </div>
            <div>
              <strong>Senha Temporária:&nbsp;</strong>
              <span id="spanSenha"></span>
            </div>
          </div>
        </MessageBox>
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
                <input id="inputNome" type="text" />
              </label>
              <label>
                Email:
                <input id="inputEmail" type="text" />
              </label>
              <label>
                CPF:
                <input id="inputCPF" type="text" />
              </label>
              <label>
                Tipo:
                <select id="selectTipo">
                  <option value="1">Aluno</option>
                  <option value="4">Professor</option>
                  <option value="2">Funcionário</option>
                  <option value="3">Administrador</option>
                </select>
              </label>
              <button type="submit" onClick={this.handleSubmit}>
                Cadastrar
              </button>
            </form>
          </div>
        </FormUsuarios>
      </>
    );
  }
}
