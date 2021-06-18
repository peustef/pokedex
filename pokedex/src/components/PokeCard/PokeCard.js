import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { goToDetails } from "../../routes/coordinator";
import { CardsContainer, PokemonCard, CardButtonsContainer, CardButtonLeft, CardButtonRight } from "./styled";

const PokeCard = (props) => {
    const history = useHistory();
    const [page, setPage] = useState("")

    const [pokeList, setPokeList] = useState([])
    const [pokeDetail, setPokeDetail] = useState([])

    const getPokemon = () => {
        axios.get(`${BASE_URL}/?limit=40`)
            .then((res) => {
                setPokeList(res.data.results)
            })
            .catch((err) => {
                alert(err.response)
            })
    }

    const getDetail = (pokeList) => {
        const detailList = []

        pokeList.forEach((poke) => {
            axios.get(`${BASE_URL}/${poke.name}`).then((res) => {
                detailList.push(res.data)
                if (detailList.length === 40) {
                    const pokeOrder = detailList.sort((a, b) => {
                        return a.id - b.id
                    })
                    setPokeDetail(pokeOrder)
                }
            })
        });
    }

    useEffect(() => {
        getPokemon()
        setPage(props.currentPage)
    }, [setPage, props.currentPage])

    useEffect(() => {
        getDetail(pokeList)
    }, [pokeList])

    const renderCardPage = () => {

        if (page === "home") {
            return pokeDetail && pokeDetail.map((poke) => {
                return <PokemonCard key={poke.name}>
                    <p>#{poke.id} <strong>{poke.name}</strong></p>
                    <img alt={poke.name} src={poke.sprites.front_default} />
                    <CardButtonsContainer>
                        <CardButtonLeft onClick={() => props.addPokemonToPokedex(poke)}>Adicionar ao Pokédex</CardButtonLeft>
                        <CardButtonRight onClick={() => goToDetails(history, poke.name)}>Ver detalhes</CardButtonRight>
                    </CardButtonsContainer>
                </PokemonCard>
            })

        } else if (page === "pokedex") {
            return props.pokedex && props.pokedex.map((poke) => {
                return <PokemonCard key={poke.name}>
                    <p>#{poke.id} <strong>{poke.name}</strong></p>
                    <img alt={poke.name} src={poke.sprites.front_default} />
                    <CardButtonsContainer>
                        <CardButtonLeft onClick={() => props.removePokemonToPokedex(poke)}>Remover do Pokédex</CardButtonLeft>
                        <CardButtonRight onClick={() => goToDetails(history, poke.name)}>Ver detalhes</CardButtonRight>
                    </CardButtonsContainer>
                </PokemonCard>
            })
        }
    }



    return (
        <CardsContainer>
            {renderCardPage()}
        </CardsContainer>
    );
};

export default PokeCard;
