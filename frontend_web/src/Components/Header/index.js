import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Head, SideNav } from "./styles";
import logo from "../../../src/static/logoILib.png";
import avatar from "../../static/dcapassi.jpg";

export default class Header extends Component {
  abrirMenu = (e) => {
    document.getElementById("menuUsuario").style.display = "block";
  };
  fecharMenu = (e) => {
    document.getElementById("menuUsuario").style.display = "none";
  };

  render() {
    return (
      <>
        <Head>
          <img src={logo} alt="logo" />
          <div>
            <div>
              <strong>Diego Capassi Moreira</strong>
              <p>diego.capassi@senac.com.br</p>
            </div>
            <img
              id="avatar"
              src={avatar}
              alt="avatar"
              onClick={this.abrirMenu}
            />
          </div>
        </Head>
        <SideNav>
          <div id="menuUsuario">
            <a href="#" onClick={this.fecharMenu}>
              &times;
            </a>
            <a href="#">Minha Conta</a>
            <a href="#">Deslogar</a>
          </div>
        </SideNav>
      </>
    );
  }
}
