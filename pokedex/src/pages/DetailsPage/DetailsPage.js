import React from "react";
import Logo from "../../img/Logo.png";
import { ImgContainer, Img } from "./styled";
import '../../App.css';
import { useHistory } from "react-router-dom";
import { goBack } from "../../routes/coordinator";


const DetailsPage = () => {
  const history = useHistory()

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
          <button onClick={() => goBack(history)}>VOLTAR</button>
        </div>
      </div>

    </header>
  );
};

export default DetailsPage;
