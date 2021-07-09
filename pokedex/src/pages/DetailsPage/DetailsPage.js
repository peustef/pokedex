import React, { useContext, useEffect, useState } from "react";
import Logo from "../../img/Logo.png";
import { ImgContainer, BackgroundImgContainer, Background, Img, NameTitle, StyledButton, useStyles } from "./styled";
import '../../App.css';
import { useHistory, useParams } from "react-router-dom";
import { goBack, goToPokedex } from "../../routes/coordinator";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import BackgroundClouds from '../../img/BackgroundClouds.jpg';
import PokedexLogo from '../../img/PokédexLogo.png';



const DetailsPage = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const params = useParams();
  const [pokemon, setPokemon] = useState({});
  const mainAttacks = pokemon.moves && pokemon.moves.slice(0, 10);
  const { addPokemonToPokedex, removePokemonToPokedex } = useContext(GlobalStateContext)


  const getPokemonDetail = () => {

    axios.get(`${BASE_URL}/${params.name}`).then((res) => {
      setPokemon(res.data)

    }).catch((err) => {
      alert(err.response)
    })
  }

  useEffect(() => {
    getPokemonDetail()
  }, [])

  return (
    <div>
      {pokemon.name ? (
        <div>
          <div className="BackgroundContainer">
            <img className="Background" src={BackgroundClouds}></img>
          </div>
          <header>
            <div className="Logo">
              <ImgContainer>
                <Img onClick={() => goToPokedex(history)} className="PokeBall" alt="logo" src={Logo}></Img>
              </ImgContainer>
              <div id="PokedexTitle" onClick={() => goToPokedex(history)}>
                <img id="PokedexLogo" src={PokedexLogo}></img>
              </div>
              <div className="Title">
                <NameTitle className="TitleHeader">{pokemon.name}</NameTitle>
                <div className="ButtonsContainer">
                  <Button className="AddButton" onClick={() => addPokemonToPokedex(pokemon)}
                    size="medium"
                    variant="contained"
                    color="default"
                    className={classes.button}
                    endIcon={<Icon>send</Icon>}
                  >
                    ADICIONAR
                  </Button>
                  <Button className="RemoveButton" onClick={() => removePokemonToPokedex(pokemon)}
                    size="medium"
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    endIcon={<DeleteIcon />}
                  >
                    REMOVER
                  </Button>
                  <StyledButton className="PHeader"
                    onClick={() => goBack(history)}>
                    VOLTAR
                  </StyledButton>
                </div>
                <div className="HiddenButtons">
                  <Button onClick={() => addPokemonToPokedex(pokemon)}
                    size="medium"
                    variant="contained"
                    color="default"
                    className={classes.button}
                    endIcon={<Icon>send</Icon>}
                  />

                  <Button onClick={() => removePokemonToPokedex(pokemon)}
                    size="medium"
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    endIcon={<DeleteIcon />}
                  />

                </div>
              </div>
            </div>

          </header>
          <div className="ContainerDetails">
            <div className="ContainerImgs">
              <div className="PokeType">

                {pokemon.types && pokemon.types.map((type) => {
                  return <div key={type.type.name}>
                    <h3>Tipo {type.slot}</h3>
                    <p>{type.type.name}</p>
                  </ div>
                })}
              </div>
              <div className="ContainerImgFront">
                <img alt={pokemon.name} className="ImgFront" src={pokemon.sprites && pokemon.sprites.front_default} />
              </div>
              <div className="ContainerImgBack">
                <img alt={pokemon.name} className="ImgBack" src={pokemon.sprites && pokemon.sprites.back_default} />
              </div>
            </div>
            <div className="PokeStats">
              <h1>Poderes</h1>
              <p>hp: {pokemon.stats && pokemon.stats[0].base_stat}</p>
              <p>attack: {pokemon.stats && pokemon.stats[1].base_stat}</p>
              <p>defense: {pokemon.stats && pokemon.stats[2].base_stat}</p>
              <p>special-attack: {pokemon.stats && pokemon.stats[3].base_stat}</p>
              <p>special-defense: {pokemon.stats && pokemon.stats[4].base_stat}</p>
              <p>speed: {pokemon.stats && pokemon.stats[5].base_stat}</p>
            </div>

            <div className="PokeMoves">
              <h1>Principais Ataques</h1>
              {mainAttacks && mainAttacks.map((move) => {
                return <p key={move.move.name}>{move.move.name}</p>
              })}
            </div>
          </div>
        </div>
      ) : (
        <p>Carregando detalhes...</p>
      )
      }
    </div>
  );
};

export default DetailsPage;
