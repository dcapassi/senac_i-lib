import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Option } from "./styles";
import logo from "../../../src/static/logoILib.png";
import avatar from "../../static/dcapassi.jpg";
import { FiUser } from "react-icons/fi";
import { FaBook } from "react-icons/fa";
import { GiDoorHandle } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import Header from "../../Components/Header";

export default class MenuPrincipal extends Component {
  abrirMenu = (e) => {
    document.getElementById("menuUsuario").style.display = "block";
  };
  fecharMenu = (e) => {
    document.getElementById("menuUsuario").style.display = "none";
  };

  render() {
    return (
      <>
        <Header />
        <Container>
          <h1>Menu Principal</h1>
          <Option>
            <div>
              <FiUser size={100} color="#044C8C" />
              <div>
                <strong>Usuários</strong>
                <Link to="/CadastrarUsuario">Criar Usuários</Link>
              </div>
            </div>
            <div>
              <FaBook size={100} color="#044C8C" />
              <div>
                <strong>Livros</strong>
                <Link to="/CadastrarISBN">Cadastrar ISBN</Link>
                <Link to="/CadastrarLivro">Cadastrar Livro</Link>
              </div>
            </div>
            <div>
              <GiDoorHandle size={100} color="#044C8C" />
              <div>
                <strong>Salas</strong>
                <Link to="/CadastrarSala">Cadastrar Sala</Link>
              </div>
            </div>
            <div>
              <GoSearch size={100} color="#044C8C" />
              <div>
                <strong>Pesquisar e Editar</strong>
                <Link>Listar / Remover / Editar</Link>
              </div>
            </div>
          </Option>
        </Container>
      </>
    );
  }
}
