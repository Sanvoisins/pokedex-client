import React, { Component } from 'react'
import './attaques-list.css'
export default class AttaquesList extends Component {
    state = {
        attaques: null
    }
    componentWillMount() {
        const { attaques } = this.props
        this.setState({attaques: attaques})
    }
    render() {
        return (
            <div className="col-11">
                { this.state.attaques ? (
                    <div>
                        <table className="table table-secondary table-striped">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Niveau</th>
                                    <th scope="col">Nom</th>
                                    <th scope="col">Puissance</th>
                                    <th scope="col">Précision</th>
                                    <th scope="col">PP</th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.state.attaques.map((attaque) => (
                                    <tr>
                                        <th scope="row">{ attaque.niveau }</th>
                                        <td>{ attaque.nom }</td>
                                        <td>{ attaque.puissance }</td>
                                        <td>{ attaque.precision }</td>
                                        <td>{ attaque.pp }</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>) : (
                        <div>
                            <h1>Chargement des Attaques</h1>
                        </div>
                )}
            </div>
        )
    }
}
