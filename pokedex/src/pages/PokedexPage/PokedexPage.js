import React from "react";
import Logo from "../../img/Logo.png";
import { ImgContainer, Img, PokemonListContainer } from "./styled";
import '../../App.css';
import { useHistory } from "react-router-dom";
import { goToHome } from "../../routes/coordinator";



const PokedexPage = () => {
  const history = useHistory()

  return (
    <div>
      <header>
        <div className="Logo">
          <ImgContainer>
            <Img src={Logo}></Img>
          </ImgContainer>
          <h1>POKÉDEX</h1>
          <div className="Title">
            <p>POKÉDEX</p>
            <p onClick={() => goToHome(history)}>VOLTAR PARA LISTA</p>
          </div>
        </div>
      </header>

    </div>
  );
};

export default PokedexPage;
