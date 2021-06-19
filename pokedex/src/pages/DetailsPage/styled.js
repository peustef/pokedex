import styled from "styled-components";

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
