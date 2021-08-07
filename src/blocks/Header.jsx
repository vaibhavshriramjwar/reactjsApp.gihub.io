import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../blocks/Header.css'
import nav from './nav'
import Safe from "react-safe"
import ScriptTag from 'react-script-tag';
import {Helmet} from "react-helmet";
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    static propTypes = {
        prop: PropTypes
    }


    toggleMenu() {  
        const menuToggle = document.querySelector('.menuToggle');
        const navigation = document.querySelector('.navigation');
        menuToggle.classList.toggle('active');
        navigation.classList.toggle('active'); 
    }  

    render() {

        return (
            
            <header>
                <a href="#"class="logo">byKlick<span>.</span></a>
                <div class="menuToggle" onClick={this.toggleMenu} ></div>
                <ul class="navigation">
                        <li><a href="#home">entrix</a></li>
                        <li><NavLink exact to="/partnerHome">Contractor</NavLink></li>
                        <li><a href="#menu">Features</a></li>
                        <li><a href="#expert">Advertising</a></li>  
                        <li><NavLink exact id="btn"to="/login">Login</NavLink>
                        </li>
                </ul>
            </header>

        )
    }
}
