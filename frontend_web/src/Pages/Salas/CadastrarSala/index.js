import React, { Component } from "react";
import Header from "../../../Components/Header";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import api from "../../../services/api";
import { connect } from "react-redux";
import { FormSala, MessageBox } from "./styles";

class CadastrarSala extends Component {
  closeMessage = async (e) => {
    document.getElementById("messageBox").style.display = "none";
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    let id = document.getElementById("inputId").value;
    let numero = document.getElementById("inputNumero").value;
    let localizacao = document.getElementById("inputLocalizacao").value;
    let descricao = document.getElementById("inputDescricao").value;

    const { user } = this.props;
    const data = await api
      .post(
        "/salas",
        {
          id,
          numero,
          localizacao,
          descricao,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then(function (response) {
        document.getElementById("spanId").innerText = id;
        document.getElementById("spanNumero").innerText = numero;
        document.getElementById("spanLocalizacao").innerText = localizacao;
        document.getElementById("spanDescricao").innerText = descricao;
      });

    //Generate QR-Code
    const qrCode = await api;
    api
      .post("/qr", {
        string: id,
      })
      .then(function (response) {
        console.log(response);

        document.getElementById(
          "imgQr"
        ).src = `data:image/png;base64, ${response.data.base64}`;
        document.getElementById("messageBox").style.display = "block";
      });
  };

  render() {
    return (
      <>
        <Header />
        <MessageBox id="messageBox" onClick={this.closeMessage}>
          <div id="tittle">
            <h1>Sala criada com sucesso</h1>
          </div>
          <div id="message">
            <div>
              <strong>Id:&nbsp;</strong>
              <span id="spanId"></span>
            </div>
            <div>
              <strong>Número:&nbsp;</strong>
              <span id="spanNumero"></span>
            </div>
            <div>
              <strong>Localização:&nbsp;</strong>
              <span id="spanLocalizacao"></span>
            </div>
            <div>
              <strong>Descrição:&nbsp;</strong>
              <span id="spanDescricao"></span>
            </div>
            <div>
              <img id="imgQr" src="" alt="QR-Code" />
            </div>
          </div>
        </MessageBox>
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
                Código da Sala:
                <input autocomplete="off" type="string" id="inputId" />
              </label>
              <label>
                Número:
                <input autocomplete="off"type="number" id="inputNumero" />
              </label>
              <label>
                Localização:
                <input autocomplete="off" type="text" id="inputLocalizacao" />
              </label>
              <label>
                Descrição:
                <input autocomplete="off" type="text" id="inputDescricao" />
              </label>

              <button type="buton" onClick={this.handleSubmit}>
                Cadastrar
              </button>
            </form>
          </div>
        </FormSala>
      </>
    );
  }
}
const mapState = (state) => ({
  user: state.user,
});
export default connect(mapState)(CadastrarSala);
