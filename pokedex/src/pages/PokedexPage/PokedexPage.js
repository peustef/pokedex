import React from "react";
import Logo from "../../img/Logo.png";
import { ImgContainer, Img, PokemonListContainer, StyledButton } from "./styled";
import '../../App.css';
import { useHistory } from "react-router-dom";
import { goToHome, goToPokedex } from "../../routes/coordinator";
import PokeCard from "../../components/PokeCard/PokeCard";
import BackgroundClouds from '../../img/BackgroundClouds.jpg';



const PokedexPage = (props) => {
  const history = useHistory()
  const currentPage = "pokedex"

  return (
    <div>
      <div className="BackgroundContainer">
        <img className="Background" src={BackgroundClouds}></img>
      </div>
      <header>
        <div className="Logo">
          <ImgContainer>
            <Img className="PokeBall" src={Logo}></Img>
          </ImgContainer>
          {/* <h1 onClick={() => goToPokedex(history)}>POKÉDEX</h1> */}
          <div className="Title">
            <p className="TitleHeader">POKÉDEX</p>
            <StyledButton className="PHeader" onClick={() => goToHome(history)}>VOLTAR PARA LISTA</StyledButton>
          </div>
        </div>
      </header>
      <PokemonListContainer>

        <PokeCard
          currentPage={currentPage}
        />

      </PokemonListContainer>
    </div>
  );
};

export default PokedexPage;
