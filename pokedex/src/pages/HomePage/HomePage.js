import React from "react";
import Logo from "../../img/Logo.png";
import PokeCard from "../../components/PokeCard/PokeCard";
import { ImgContainer, Img, PokemonListContainer } from "./styled";
import '../../App.css';

const HomePage = () => {
  return (
    <div>
      <header>
        <div className="Logo">
          <ImgContainer>
            <Img src={Logo}></Img>
          </ImgContainer>
          <h1>POKÉDEX</h1>
          <div className="Title">
            <p>LISTA DE POKEMONS</p>
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
