import styled from "styled-components";

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
  margin-top: 2rem;
`