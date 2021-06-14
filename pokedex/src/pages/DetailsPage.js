import React from "react";
import Logo from "../img/Logo.png";
import styled from "styled-components";
import '../App.css';

const ImgContainer = styled.div`
  display: flex;
  height: auto;
  width: 5%;
  padding-left: 10vh;

`

const Img = styled.img`
  width: 100%;
  height: 100%;
`

const DetailsPage = () => {
  return (
    <header>
      <div className="Logo">
        <ImgContainer>
          <Img src={Logo}></Img>
        </ImgContainer>
        <h1>POKÉDEX</h1>
        <div className="Title">
          <p>NOME DE POKEMON</p>
          <button>ADICIONAR/REMOVER DA POKÉDEX</button>
          <button>VOLTAR</button>
        </div>
      </div>

    </header>
  );
};

export default DetailsPage;
