import React, { Component } from 'react'
import axios from 'axios'
import PokemonCard from '../pokemon-card/pokemon-card'
import "./pokemon-list.css"
import { FaExchangeAlt } from 'react-icons/fa';

export default class PokemonList extends Component {
    state = {
        urlApi: 'http://localhost:5000/pokemons',
        pokemons: [],
        search: '',
        imageType: 'icon'
    }

    async componentDidMount() {
        this.getPokemons();
    }

    getPokemons() {
        axios.get(this.state.urlApi).then(response => {
            this.setState({pokemons: response.data.pokemons})
        })
    }
    getSearch(event) {
        this.setState({search: event.target.value.substr(0,20)})
    }
    async changeImage() {
        if(this.state.imageType === 'icon') {

        console.log('toto')
            this.setState({imageType: 'other'})
            console.log('toto2')
        } else {
            this.setState({imageType: 'icon'})
        }
    }

    render() {
        let pokemonFiltered = this.state.pokemons.filter((pokemon) => {
            return pokemon.nom.indexOf(this.state.search) !== -1;
        })
        return (
            <React.Fragment>
                <div className="row text-center justify-content mb-5" >
                    <div className="col-md-6 offset-md-3 row">
                        <div className="col-sm-2" >
                            <button 
                                className="btn btn-outline-warning" 
                                onClick={() => this.changeImage()}
                                title="Changer le type d'image des pokemons"
                            >
                                <FaExchangeAlt />
                            </button>
                        </div>
                        <input 
                            className="form-control inputSearch" 
                            placeholder="Rechercher ..." 
                            type="text"  
                            value={this.state.search}
                            onChange={this.getSearch.bind(this)}
                        />
                    </div>
                </div>
                { pokemonFiltered ? (
                    <div className="row">
                        { pokemonFiltered.map((pokemon) => (
                            <PokemonCard
                                key={pokemon.numéro}
                                name={pokemon.nom}
                                number={pokemon.numéro}
                                type1={pokemon.type1}
                                type2={pokemon.type2}
                                imageType={this.state.imageType}
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
