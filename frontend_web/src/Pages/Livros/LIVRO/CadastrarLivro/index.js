import React, { Component } from "react";
import Header from "../../../../Components/Header";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FormLivro, MessageBox } from "./styles";
import api from "../../../../services/api";

class CadastrarLivro extends Component {
  state = {
    isbns: [],
  };
  closeMessage = async (e) => {
    document.getElementById("messageBox").style.display = "none";
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    let id = document.getElementById("inputId").value;
    let isbn = document.getElementById("selectIsbn").value;

    const { user } = this.props;
    const data = await api
      .post(
        "/livros",
        {
          id,
          id_isbn: isbn,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then(function (response) {
        document.getElementById("spanId").innerText = id;
        document.getElementById("spanIsbn").innerText = isbn;
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

  async componentDidMount() {
    const { user } = this.props;
    let isbn = [];
    const response = await api
      .get(`isbn/`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then(function (response) {
        isbn = response.data;
      });
    console.log(isbn);
    let isbnArray = [];
    isbn.map((value) => {
      isbnArray.push(value.isbn);
    });
    console.log(isbnArray);
    this.setState({ isbns: isbnArray });
  }
  render() {
    return (
      <>
        <Header />
        <MessageBox id="messageBox" onClick={this.closeMessage}>
          <div id="tittle">
            <h1>Livro cadastrado com sucesso</h1>
          </div>
          <div id="message">
            <div>
              <strong>Livro Id:&nbsp;</strong>
              <span id="spanId"></span>
            </div>
            <div>
              <strong>ISBN:&nbsp;</strong>
              <span id="spanIsbn"></span>
            </div>
            <div>
              <img id="imgQr" src="" alt="QR-Code" />
            </div>
          </div>
        </MessageBox>
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
                <input autocomplete="off" id="inputId" type="text" />
              </label>
              <label>
                ISBN:
                <select id="selectIsbn">
                  {this.state.isbns.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </label>

              <button type="buton" onClick={this.handleSubmit}>
                Cadastrar
              </button>
            </form>
          </div>
        </FormLivro>
      </>
    );
  }
}

const mapState = (state) => ({
  user: state.user,
});
export default connect(mapState)(CadastrarLivro);
