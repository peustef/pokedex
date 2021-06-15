import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../img/Logo.png";
import PokeCard from "../../components/PokeCard/PokeCard";
import { ImgContainer, Img, PokemonListContainer } from "./styled";
import { goToPokedex } from "../../routes/coordinator";
import '../../App.css';

const HomePage = () => {
  const history = useHistory()

  return (
    <div>
      <header>
        <div className="Logo">
          <ImgContainer>
            <Img src={Logo}></Img>
          </ImgContainer>
          <h1 onClick={() => goToPokedex(history)}>POKÉDEX</h1>
          <div className="Title">
            <p className="TitleHeader">LISTA DE POKEMONS</p>
          </div>
        </div>
      </header>

      <PokemonListContainer>
        <PokeCard />
      </PokemonListContainer>

    </div>
  );
};

export default HomePage;
