import React, { Component } from 'react'
import "./pokemon-card.css"

export default class PokemonCard extends Component {
    state = {
        name: '',
        number: '',
        imgUrl: ''
    }
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        const { name, number } = this.props;
        return (
            <div className="col-md-3 col-sm-6 mb-5">
                <div className="card">
                    <div className="card-header">
                        <span>hello</span>
                    </div>
                </div>
            </div>
        )
    }
}
