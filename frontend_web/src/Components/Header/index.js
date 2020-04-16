import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Head, SideNav } from "./styles";
import logo from "../../../src/static/logoILib.png";
//import avatar from "../../static/dcapassi.jpg";
import { connect } from "react-redux";
import api from "../../services/api";

class Header extends Component {
  state = {
    avatar: "admin.png",
  };

  deslogar = (e) => {
    const { dispatch } = this.props;
    dispatch({
      type: "@user/SIGN_OUT",
    });
  };

  abrirMenu = (e) => {
    document.getElementById("menuUsuario").style.display = "block";
  };
  fecharMenu = (e) => {
    document.getElementById("menuUsuario").style.display = "none";
  };

  async componentDidMount() {
    const { user } = this.props;
    let loadedAvatar = this.state.avatar;
    const response = await api
      .get(`avatar/${user.id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then(function (response) {
        loadedAvatar = response.data.arquivo;
      });
    this.setState({ avatar: loadedAvatar });
  }

  render() {
    const { user } = this.props;
    const { avatar } = this.state;

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
              src={`http://localhost:3399/files/${avatar}`}
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
            <a href="#" onClick={this.deslogar}>
              Deslogar
            </a>
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
