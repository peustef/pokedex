import styled from "styled-components"
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const ImgContainer = styled.div`
  display: flex;
  height: auto;
  width: 5%;
  padding-left: 10vh;

  @media(max-width: 768px) {
    position: absolute;
    width: 10%;
    padding-left: 5vh;
    margin-top: 15px;
    margin-right: 45rem;
  }

  @media(max-width: 376px) {
    position: absolute;
    width: 20%;
    margin-right: 300px;;
    margin-top: 1rem;

  }


`

export const Img = styled.img`
  width: 100%;
  height: 100%;
`

export const PokemonListContainer = styled.div`
  display:flex;
  justify-content:center;
`

export const StyledButton = withStyles({
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
    ['@media (max-width:768px)']: {
      display: 'none',
    },
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);
