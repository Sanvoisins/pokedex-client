import React, { Component } from 'react'
import axios from 'axios'
import './pokemon-detail.css'
import AttaquesList from '../attaques/attaques-list/attaques-list'

export default class PokemonDetail extends Component {
    state = {
        apiUrl: 'http://localhost:5000/pokemons/',
        number: null,
        pokemon: null,
        image: ''
    }
    async componentDidMount() {
        const { pokemonNumber } = this.props.match.params;
        this.setState({number: pokemonNumber})
        this.getPokemon(pokemonNumber)
        this.loadImage(pokemonNumber)
    }
    getPokemon(pokemonNumber) {
        axios.get(this.state.apiUrl + pokemonNumber).then(result => {
            const pokemon = result.data.pokemon
            Math.round((pokemon.captureval*100)/255)
            pokemon.captureval = Math.round((pokemon.captureval*100)/255)
            this.setState({pokemon: pokemon})
            console.log(this.state.pokemon)
        })
    }
    loadImage(pokemonNumber) {
        const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonNumber}.png`
        this.setState({image: img})
    }
    render() {
        const pokemon = this.state.pokemon
        return (
            <div>
                {this.state.pokemon ? (

                    <React.Fragment>
                        <div className="row">
                            <div className="col-md-4 border border-rounded p-5 mr-2 stage">
                                <div className="box bounce-5">
                                    <img src={this.state.image} className="imagePokemon" alt={this.state.number} />
                                </div>
                            </div>
                            <div className="col-md-7 border-bottom border-left border-right border-rounded">
                                <div className="p-3 row border-bottom border-top border-rounded">
                                    <h3>{ pokemon.nom } <small className="text-muted">N°{ pokemon.numéro }</small></h3>
                                </div>
                                <div className="row pl-3 mt-2">
                                    <span>Espèce : { pokemon.espece } -</span>
                                    <span className="ml-1">Taille : { pokemon.taille } -</span>
                                    <span className="ml-1">Poids : { pokemon.poids } -</span>
                                </div>
                                <div className="row pl-3 mt-2">
                                    <span className="">Couleur : { pokemon.couleur } -</span>
                                    <span className="ml-1">Chance de capture : { pokemon.captureval } %</span>
                                </div>
                                <div className="row pl-3 mt-2">
                                    <span>Talent : { pokemon.capspe1 } / {pokemon.capspe2 ? (<psan>{pokemon.capspe2}</psan>) : (<span></span>)} </span>
                                </div>
                                <div className="row pl-3 mt-2">
                                    <span>Expérience requise pour arrivée au niveau 100 : { pokemon.expmax } xp</span>
                                </div>
                                <div className="row pl-3 mt-2">
                                    <span>Nombre de pas pour éclore un oeuf : { pokemon.oeufpas }</span>   
                                </div>
                                <div className="row pl-3 mt-2">
                                    <span>Nom étranger : { pokemon.nomen } (ENG) / { pokemon.nomja } (JAP)</span>   
                                </div>
                                <div className="row pl-3 mt-2">
                                    <span>Type : <div className={'btn mr-1 ' + pokemon.type1} >{ pokemon.type1 }</div>
                                    {pokemon.type2 ? (<button className={'btn ' + pokemon.type2} >{ pokemon.type2 }</button>) : (<div></div>)}</span>   
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3"> 
                            <AttaquesList attaques={pokemon.attaques}/>
                        </div>
                    </React.Fragment>
                ) : (
                    <div>
                        Chargement du pokemon
                    </div>
                )}
            </div>
        )
    }
}
