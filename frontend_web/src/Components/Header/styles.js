import styled from "styled-components";

export const Head = styled.div`
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
      cursor: pointer;
    }
  }
`;

export const SideNav = styled.div`
  div {
    display: none;
    height: 300px;
    width: 250px;
    position: fixed;
    z-index: 1;
    left: 0px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #fff;
    transition: 0.5s;
    padding-top: 60px;
    a {
      position: relative;
      font-family: "Open Sans";
      padding: 8px 8px 8px 32px;
      text-decoration: none;
      font-size: 20px;
      color: #044c8c;
      display: block;
      transition: 0.3s;
    }
  }
`;
