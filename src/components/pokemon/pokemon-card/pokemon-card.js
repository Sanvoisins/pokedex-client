import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./pokemon-card.css"

export default class PokemonCard extends Component {
    state = {
        name: '',
        number: '',
        image: ''
    }
    async componentDidMount() {
        this.loadImages()
        this.setState({number: this.props.number, imageType: this.props.imageType})
    }
    async componentWillReceiveProps() {
        this.loadImages()
    }
    loadImages() {
        if(this.props.imageType === 'icon') {
            const img = require('../../../img/pokemons/' + this.props.number + '.png')
            this.setState({image: img})
        } else {
            const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.props.number}.png`
            this.setState({image: img})
        }
    }
    render() {
        const { name, number, type1, type2 } = this.props;
        return (
            <div className="col-md-4 col-sm-6 mb-5">
                <Link to={`pokemon/${this.state.number}`} className="Link">
                    <div className="card flex-row flex-wrap">
                        <div className="card-header border-0 backIcon">
                            <img src={this.state.image} alt={name} className="card-img-top iconPokemon"/>
                        </div>
                        <div className="card-block px-2">
                            <h4 className="card-title">{ name }</h4>
                            <p className="card-text">N°{ number }</p>
                            <div className={'btn mr-1 ' + type1} >{ type1 }</div>
                            {type2 ? (<button className={'btn ' + type2} >{ type2 }</button>) : (<div></div>)}
                        </div>
                        <div className="w-100"></div>
                    </div>
                </Link> 
            </div>
        )
    }
}
