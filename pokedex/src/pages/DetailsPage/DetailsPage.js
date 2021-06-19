import React, { useEffect, useState } from "react";
import Logo from "../../img/Logo.png";
import { ImgContainer, Img, NameTitle } from "./styled";
import '../../App.css';
import { useHistory, useParams } from "react-router-dom";
import { goBack, goToPokedex } from "../../routes/coordinator";
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from "axios";
import { BASE_URL } from "../../constants/urls";


const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #282c34 30%, #444b59 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 36.5,
    padding: '0 15px',
    marginLeft: '7rem',
    marginRight: '1rem',
    boxShadow: '0 3px 5px 2px rgba(255, 255, 255, .3)',
    transition: '0.3s ease-in-out',
    ['@media (max-width:1640px)']: {
      marginTop: '0.5rem',
      marginRight: '10rem',
    },
    ['@media (max-width:1368px)']: {
      marginRight: '15rem',
    },
    ['@media (max-width:1257px)']: {
      marginRight: '20rem',
    },

    
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);



const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    
  },
}));



const DetailsPage = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const params = useParams();
  const [pokemon, setPokemon] = useState({});
  const mainAttacks = pokemon.moves && pokemon.moves.slice(0, 10);
  const { pokedex, setPokedex } = props;


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
      <header>
        <div className="Logo">
          <ImgContainer>
            <Img className="PokeBall" onClick={() => goToPokedex(history)} src={Logo}></Img>
          </ImgContainer>
          <h1 className="Pokedex" onClick={() => goToPokedex(history)}>POKÉDEX</h1>
          <div className="Title">
            <NameTitle className="TitleHeader">{pokemon.name}</NameTitle>
            <div className="ButtonsContainer">
              <Button className="AddButton" onClick={() => props.addPokemonToPokedex(pokemon)}
                size="medium"
                variant="contained"
                color="default"
                className={classes.button}
                endIcon={<Icon>send</Icon>}
              >
                ADICIONAR
              </Button>
              <Button className="RemoveButton" onClick={() => props.removePokemonToPokedex(pokemon)}
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
              <Button onClick={() => props.addPokemonToPokedex(pokemon)}
                size="medium"
                variant="contained"
                color="default"
                className={classes.button}
                endIcon={<Icon>send</Icon>}
              />

              <Button onClick={() => props.removePokemonToPokedex(pokemon)}
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
            <img className="ImgFront" src={pokemon.sprites && pokemon.sprites.front_default} />
          </div>
          <div className="ContainerImgBack">
            <img className="ImgBack" src={pokemon.sprites && pokemon.sprites.back_default} />
          </div>
        </div>
        <div className="PokeStats">
          <h3>Poderes</h3>
          <p>hp: {pokemon.stats && pokemon.stats[0].base_stat}</p>
          <p>attack: {pokemon.stats && pokemon.stats[1].base_stat}</p>
          <p>defense: {pokemon.stats && pokemon.stats[2].base_stat}</p>
          <p>special-attack: {pokemon.stats && pokemon.stats[3].base_stat}</p>
          <p>special-defense: {pokemon.stats && pokemon.stats[4].base_stat}</p>
          <p>speed: {pokemon.stats && pokemon.stats[5].base_stat}</p>
        </div>

        <div className="PokeMoves">
          <h3>Principais Ataques</h3>
          {mainAttacks && mainAttacks.map((move) => {
            return <p key={move.move.name}>{move.move.name}</p>
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
