import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Header, Container, Option } from "./styles";
import logo from "../../../src/static/logoILib.png";
import avatar from "../../static/dcapassi.jpg";
import { FiUser } from "react-icons/fi";
import { FaBook } from "react-icons/fa";
import { GiDoorHandle } from "react-icons/gi";
import { GoSearch } from "react-icons/go";

export default class MenuPrincipal extends Component {
  render() {
    return (
      <>
        <Header>
          <img src={logo} alt="logo" />
          <div>
            <div>
              <strong>Diego Capassi Moreira</strong>
              <p>diego.capassi@senac.com.br</p>
            </div>
            <img id="avatar" src={avatar} alt="avatar" />
          </div>
        </Header>
        <Container>
          <h1>Menu Principal</h1>
          <Option>
            <div>
              <FiUser size={100} color="#044C8C" />
              <div>
                <strong>Usuários</strong>
                <Link>Criar Usuários</Link>
              </div>
            </div>
            <div>
              <FaBook size={100} color="#044C8C" />
              <div>
                <strong>Livros</strong>
                <Link>Cadastrar ISBN</Link>
                <Link>Cadastrar Livro</Link>
              </div>
            </div>
            <div>
              <GiDoorHandle size={100} color="#044C8C" />
              <div>
                <strong>Salas</strong>
                <Link>Cadastrar Sala</Link>
                <Link>Listar Sala</Link>
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
