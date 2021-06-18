import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import HomePage from "../pages/HomePage/HomePage";

const Router = () => {
  const [pokedex, setPokedex] = useState([]);

  const addPokemonToPokedex = (poke) => {
    const index = pokedex.findIndex((pokeInPokedex) => {
      if (pokeInPokedex.id === poke.id) {
        return true
      } else {
        return false
      }
    })
    if (index === -1) {
      const pokedexCopy = [...pokedex, poke]

      setPokedex(pokedexCopy)
      alert("Pokémon adicionado a sua Pokédex!")

    } else {
      alert("Você já tem esse Pokémon em sua Pokédex!")
    }

  }

  const removePokemonToPokedex = (poke) => {
    console.log("remove")
    const filteredPokedex = pokedex.filter((pokeToRemove) => {
      if (pokeToRemove.id === poke.id) {
        alert("Pokémon removido da sua Pokédex!")
        return false
      } else {
        return true
      }
    })
    setPokedex(filteredPokedex)
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage pokedex={pokedex} setPokedex={setPokedex} addPokemonToPokedex={addPokemonToPokedex} />
        </Route>

        <Route exact path="/details/:name">
          <DetailsPage pokedex={pokedex} setPokedex={setPokedex} addPokemonToPokedex={addPokemonToPokedex} removePokemonToPokedex={removePokemonToPokedex} />
        </Route>

        <Route exact path="/pokedex">
          <PokedexPage pokedex={pokedex} setPokedex={setPokedex} removePokemonToPokedex={removePokemonToPokedex} />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;