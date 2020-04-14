import styled from "styled-components";

export const Header = styled.div`
  * {
    border: 0px;
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }

  border: 1px solid #cccccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  padding: 0.5%;

  img {
    width: 125px;
    height: 35px;
    margin-left: 1%;
  }
  div {
    display: flex;
    text-align: center;
    div {
      display: block;
      margin-top: 5px;

      strong {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 25px;
        color: #000000;
      }
      p {
        width: 200px;
        font-family: "Open Sans";
        font-style: italic;
        font-size: 12px;
        line-height: 25px;
        text-align: center;
        color: #000000;
      }
    }

    #avatar {
      height: 55px;
      width: 55px;
      border-radius: 50%;
      border: solid 4px #044c8c;
    }
  }
`;

export const Container = styled.div`
  h1 {
    text-align: center;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: bold;
    line-height: 50px;
    color: black;
  }
`;

export const Option = styled.div`
  justify-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 30px;
  div {
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    width: 80%;
    height: 100%;
    border: 1px solid #cccccc;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

    svg {
      padding-left: 20px;
    }
    div {
      border: none;
      box-shadow: none;
      padding: 0px;
      padding-left: 45px;
      display: block;
      strong {
        justify-content: top;
        font-size: 24px;
        display: block;
        font-family: "Open Sans";
        font-style: normal;
        font-weight: bold;
        line-height: 33px;
        color: #000000;
      }
      a {
        text-decoration: none;
        font-size: 12px;
        display: block;
        font-family: "Open Sans";
        font-style: italic;
        font-weight: bold;
        line-height: 33px;
        color: #044c8c;
      }
    }
  }
`;
