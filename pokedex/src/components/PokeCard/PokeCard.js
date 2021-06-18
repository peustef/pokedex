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

    const addPokemonToPokedex = (poke) => {
        const index = props.pokedex.findIndex((pokeInPokedex) => {
            if (pokeInPokedex.id === poke.id) {
                return true
            } else {
                return false
            }
        })
        if (index === -1) {
            const pokedexCopy = [...props.pokedex, poke]

            props.setPokedex(pokedexCopy)
            alert("Pokémon adicionado a sua Pokédex!")

        } else {
            alert("Você já tem esse Pokémon em sua Pokédex!")
        }

    }
    console.log(props.pokedex)

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

    const addRemoveButton = () => {

        if (page === "home") {
            return pokeDetail && pokeDetail.map((poke) => {
                return <PokemonCard key={poke.name}>
                    <p>#{poke.id} <strong>{poke.name}</strong></p>
                    <img alt={poke.name} src={poke.sprites.front_default} />
                    <CardButtonsContainer>
                        <CardButtonLeft onClick={() => addPokemonToPokedex(poke)}>Adicionar ao Pokédex</CardButtonLeft>
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
                        <CardButtonLeft>Remover do Pokédex</CardButtonLeft>
                        <CardButtonRight onClick={() => goToDetails(history, poke.name)}>Ver detalhes</CardButtonRight>
                    </CardButtonsContainer>
                </PokemonCard>
            })
        }
    }

    return (
        <CardsContainer>
            {addRemoveButton()}
        </CardsContainer>
    );
};

export default PokeCard;
