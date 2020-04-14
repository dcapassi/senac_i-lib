import styled from "styled-components";

export const FormLivro = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      font-family: "Open Sans";
    }
  }

  div form {
    display: flex;
    flex-direction: column;
    label {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 34px;
      color: #044c8c;
      display: flex;
      flex-direction: column;
      input,
      select {
        text-align-last: center;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
        outline: none;
        font-size: 15px;
        font-family: "Open Sans";
        text-align: center;
        background: #ffffff;
        border: 2px solid #fd5f00;
        box-sizing: border-box;
        border-radius: 25px;
        width: 388px;
        height: 45px;
      }
    }
    button {
      font-size: 15px;
      color: #044c8c;
      margin-bottom: 2%;
      margin-top: 30px;
      background: #ffffff;
      border: 2px solid #fd5f00;
      box-sizing: border-box;
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 12px;
      width: 388px;
      padding: 15px;
      cursor: pointer;
      align-self: center;

      &:hover {
        background-color: #fcc29e;
      }
      &:active {
        background-color: #fd995b;
      }
    }
  }
`;
