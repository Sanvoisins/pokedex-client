import React, { Component } from 'react'
import logo from './logo.png'
import './navbar.css'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark">
                  <span className="navbar-brand" href="">
                  <img src={logo} className="logo" alt="logo" />
                    POKEDEX
                  </span>
                </nav>
            </div>
        )
    }
}
