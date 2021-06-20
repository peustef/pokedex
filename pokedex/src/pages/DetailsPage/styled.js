import styled from "styled-components";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


export const ImgContainer = styled.div`
  display: flex;
  height: auto;
  width: 5%;
  padding-left: 10vh;

  @media(max-width: 768px) {
    position: absolute;
    width: 12%;
    padding-left: 5vh;
    margin-top: 5px;
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

export const NameTitle = styled.p`
  text-transform: uppercase;
`

export const StyledButton = withStyles({
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

export const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),

  },
}));
