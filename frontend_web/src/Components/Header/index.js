import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Head, SideNav } from "./styles";
import logo from "../../../src/static/logoILib.png";
import avatar from "../../static/dcapassi.jpg";
import { connect } from "react-redux";

class Header extends Component {
  abrirMenu = (e) => {
    document.getElementById("menuUsuario").style.display = "block";
  };
  fecharMenu = (e) => {
    document.getElementById("menuUsuario").style.display = "none";
  };

  render() {
    const { user } = this.props;

    return (
      <>
        <Head>
          <img src={logo} alt="logo" />
          <div>
            <div>
              <strong>{user.nome}</strong>
              <p>{user.email}</p>
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

const mapState = (state) => ({
  user: state.user,
});
export default connect(mapState)(Header);
