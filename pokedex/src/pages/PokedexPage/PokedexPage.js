import React, { useState } from "react";
import Logo from "../../img/Logo.png";
import { ImgContainer, Img, PokemonListContainer } from "./styled";
import '../../App.css';
import { useHistory } from "react-router-dom";
import { goToHome, goToPokedex } from "../../routes/coordinator";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PokeCard from "../../components/PokeCard/PokeCard";

const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #282c34 30%, #444b59 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 36.5,
    padding: '0 15px',
    marginLeft: '70px',
    boxShadow: '0 3px 5px 2px rgba(255, 255, 255, .3)',
    transition: '0.3s ease-in-out',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const PokedexPage = (props) => {
  const history = useHistory()
  const currentPage = "pokedex"

  return (
    <div>
      <header>
        <div className="Logo">
          <ImgContainer>
            <Img src={Logo}></Img>
          </ImgContainer>
          <h1 onClick={() => goToPokedex(history)}>POKÉDEX</h1>
          <div className="Title">
            <p className="TitleHeader">POKÉDEX</p>
            <StyledButton className="PHeader" onClick={() => goToHome(history)}>VOLTAR PARA LISTA</StyledButton>
          </div>
        </div>
      </header>
      <PokemonListContainer>

        <PokeCard currentPage={currentPage} />

      </PokemonListContainer>
    </div>
  );
};

export default PokedexPage;
