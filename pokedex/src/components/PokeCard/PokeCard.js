import React from "react";
import { useHistory } from "react-router-dom";
import { goToDetails } from "../../routes/coordinator";
import { CardsContainer, PokemonCard, CardButtonsContainer, CardButtonLeft, CardButtonRight } from "./styled";

const PokeCard = () => {
    const history = useHistory();

    return (
        <CardsContainer>
            <PokemonCard>
                <p>#001 <strong>Bulbassaur</strong></p>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
                <CardButtonsContainer>
                    <CardButtonLeft>Adicionar ao Pokédex</CardButtonLeft>
                    <CardButtonRight onClick={() => goToDetails(history)}>Ver detalhes</CardButtonRight>
                </CardButtonsContainer>
            </PokemonCard>

            <PokemonCard>
                <p>#006 <strong>Charizard</strong></p>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" />
                <CardButtonsContainer>
                    <CardButtonLeft>Adicionar ao Pokédex</CardButtonLeft>
                    <CardButtonRight onClick={() => goToDetails(history)}>Ver detalhes</CardButtonRight>
                </CardButtonsContainer>
            </PokemonCard>

            <PokemonCard>
                <p>#006 <strong>Charizard</strong></p>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" />
                <CardButtonsContainer>
                    <CardButtonLeft>Adicionar ao Pokédex</CardButtonLeft>
                    <CardButtonRight onClick={() => goToDetails(history)}>Ver detalhes</CardButtonRight>
                </CardButtonsContainer>
            </PokemonCard>

            <PokemonCard>
                <p>#006 <strong>Charizard</strong></p>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" />
                <CardButtonsContainer>
                    <CardButtonLeft>Adicionar ao Pokédex</CardButtonLeft>
                    <CardButtonRight onClick={() => goToDetails(history)}>Ver detalhes</CardButtonRight>
                </CardButtonsContainer>
            </PokemonCard>

            <PokemonCard>
                <p>#006 <strong>Charizard</strong></p>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" />
                <CardButtonsContainer>
                    <CardButtonLeft>Adicionar ao Pokédex</CardButtonLeft>
                    <CardButtonRight onClick={() => goToDetails(history)}>Ver detalhes</CardButtonRight>
                </CardButtonsContainer>
            </PokemonCard>

            <PokemonCard>
                <p>#006 <strong>Charizard</strong></p>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" />
                <CardButtonsContainer>
                    <CardButtonLeft>Adicionar ao Pokédex</CardButtonLeft>
                    <CardButtonRight onClick={() => goToDetails(history)}>Ver detalhes</CardButtonRight>
                </CardButtonsContainer>
            </PokemonCard>

            <PokemonCard>
                <p>#001 <strong>Bulbassaur</strong></p>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
                <CardButtonsContainer>
                    <CardButtonLeft>Adicionar ao Pokédex</CardButtonLeft>
                    <CardButtonRight onClick={() => goToDetails(history)}>Ver detalhes</CardButtonRight>
                </CardButtonsContainer>
            </PokemonCard>

            <PokemonCard>
                <p>#001 <strong>Bulbassaur</strong></p>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
                <CardButtonsContainer>
                    <CardButtonLeft>Adicionar ao Pokédex</CardButtonLeft>
                    <CardButtonRight onClick={() => goToDetails(history)}>Ver detalhes</CardButtonRight>
                </CardButtonsContainer>
            </PokemonCard>

            <PokemonCard>
                <p>#001 <strong>Bulbassaur</strong></p>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
                <CardButtonsContainer>
                    <CardButtonLeft>Adicionar ao Pokédex</CardButtonLeft>
                    <CardButtonRight onClick={() => goToDetails(history)}>Ver detalhes</CardButtonRight>
                </CardButtonsContainer>
            </PokemonCard>
        </CardsContainer>
    );
};

export default PokeCard;
