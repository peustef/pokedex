import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../img/Logo.png";
import PokeCard from "../../components/PokeCard/PokeCard";
import { ImgContainer, Img, PokemonListContainer } from "./styled";
import { goToPokedex } from "../../routes/coordinator";
import BackgroundClouds from '../../img/BackgroundClouds.jpg';
import PokedexLogo from '../../img/PokédexLogo.png';
import '../../App.css';

const HomePage = (props) => {
  const history = useHistory()
  const currentPage = "home"

  return (
    < div >
      <div className="BackgroundContainer">
        <img className="Background" src={BackgroundClouds}></img>
      </div>
      <header>
        <div className="Logo">
          <ImgContainer>
            <Img className="PokeBall" onClick={() => goToPokedex(history)} src={Logo}></Img>
          </ImgContainer>
          <div id="PokedexTitle" onClick={() => goToPokedex(history)}>
            <img id="PokedexLogo" src={PokedexLogo}></img>
          </div>
          <div className="Title">
            <p className="TitleHeader">LISTA DE POKEMONS</p>
          </div>
        </div>
      </header>

      <PokemonListContainer>
        <PokeCard
          currentPage={currentPage}
        />
      </PokemonListContainer>

    </div >
  );
};

export default HomePage;
