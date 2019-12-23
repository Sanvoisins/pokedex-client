import React, { Component } from 'react'
import PokemonList from '../../pokemon/pokemon-list/pokemon-list'

export default class Home extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <PokemonList/>
                </div>
            </div>
        )
    }
}
