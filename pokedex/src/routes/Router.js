import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import HomePage from "../pages/HomePage/HomePage";

const Router = () => {
  const [pokedex, setPokedex] = useState([]);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/details/:name">
          <DetailsPage pokedex={pokedex} setPokedex={setPokedex}/>
        </Route>

        <Route exact path="/pokedex">
          <PokedexPage pokedex={pokedex} />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;