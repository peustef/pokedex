import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import PokedexPage from "../pages/PokedexPage";
import DetailsPage from "../pages/DetailsPage";
import HomePage from "../pages/HomePage";

const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
  
          <Route exact path="/details">
            <DetailsPage />
          </Route>
  
          <Route exact path="/pokedex">
            <PokedexPage />
          </Route>
  
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Router;