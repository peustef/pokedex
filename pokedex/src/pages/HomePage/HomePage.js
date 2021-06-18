import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../img/Logo.png";
import PokeCard from "../../components/PokeCard/PokeCard";
import { ImgContainer, Img, PokemonListContainer } from "./styled";
import { goToPokedex } from "../../routes/coordinator";
import '../../App.css';

const HomePage = (props) => {
  const history = useHistory()
  const currentPage = "home"

  const addPokemonToPokedex = (poke) => {
    const index = props.pokedex.findIndex((pokeInPokedex) => {
      if (pokeInPokedex.id === poke.id) {
        return true
      } else {
        return false
      }
    })
    if (index === -1) {
      const pokedexCopy = [...props.pokedex, poke]

      props.setPokedex(pokedexCopy)
      alert("Pokémon adicionado a sua Pokédex!")

    } else {
      alert("Você já tem esse Pokémon em sua Pokédex!")
    }

  }


  return (
    < div >
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
        <PokeCard
          currentPage={currentPage}
          pokedex={props.pokedex}
          setPokedex={props.setPokedex}
          addPokemonToPokedex={addPokemonToPokedex}
        />
      </PokemonListContainer>

    </div >
  );
};

export default HomePage;
