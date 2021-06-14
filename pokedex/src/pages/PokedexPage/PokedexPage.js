import React from "react";
import Logo from "../../img/Logo.png";
import PokeCard from "../../components/PokeCard/PokeCard";
import { ImgContainer, Img, PokemonListContainer } from "./styled";


const PokedexPage = () => {
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
            <p>VOLTAR PARA LISTA</p>
          </div>
        </div>
      </header>

      <PokemonListContainer>
        <PokeCard />
      </PokemonListContainer>

    </div>
  );
};

export default PokedexPage;
