import React, { Component } from 'react'
import PokemonCard from '../pokemon-card/pokemon-card'
import "./pokemon-list.css"

export default class PokemonList extends Component {
    state = {
        urlApi: 'http://localhost:5000/pokemons',
        pokemons: null
    }

    componentDidMount() {
        this.getPokemons();
    }

    getPokemons() {
        return fetch(this.state.urlApi, {method:'GET'}).then(response => response.json()).then(result => {
            this.setState({pokemons: result.pokemons})
            // this.state.pokemons.map((pokemon, index) => {
            //     console.log(pokemon.nom)
            // })
            console.log(this.state.pokemons)
        })
    }

    render() {
        return (
            <React.Fragment>
                { this.state.pokemons ? (
                    <div className="row">
                        { this.state.pokemons.map((pokemon) => (
                            <PokemonCard
                                key={pokemon.numéro}
                                name={pokemon.nom}
                                number={pokemon.numéro}
                            />
                        ))}
                    </div>) : (
                        <div>
                            <h1>Chargement des Pokemon</h1>
                        </div>
                )}
            </React.Fragment>
        )
    }
}
