import React from "react";
import Logo from "../../img/Logo.png";
import { ImgContainer, Img } from "./styled";
import '../../App.css';
import { useHistory } from "react-router-dom";
import { goBack, goToPokedex } from "../../routes/coordinator";
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';


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

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const DetailsPage = () => {
  const history = useHistory()
  const classes = useStyles();

  return (
    <header>
      <div className="Logo">
        <ImgContainer>
          <Img src={Logo}></Img>
        </ImgContainer>
        <h1 onClick={() => goToPokedex(history)}>POKÉDEX</h1>
        <div className="Title">
          <p className="TitleHeader">NOME DE POKEMON</p>
          <div className="ButtonsContainer">
            <Button
              size="medium"
              variant="contained"
              color="default"
              className={classes.button}
              endIcon={<Icon>send</Icon>}
            >
              ADICIONAR
            </Button>
            <Button
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
        </div>
      </div>

    </header>
  );
};

export default DetailsPage;
