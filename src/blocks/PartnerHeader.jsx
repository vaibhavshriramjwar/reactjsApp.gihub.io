import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../blocks/PartnerHeader.css';
import { NavLink } from 'react-router-dom';

export default class PartnerHeader extends Component {
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
                <a href="#"class="logo">entrix<span>.</span> partner</a>
                <div class="menuToggle" onClick={this.toggleMenu} ></div>
                <ul class="navigation">
                        <li><a href="#home">option1</a></li>
                        <li><a href="#about">option2</a></li>
                        <li><a href="#menu">option3</a></li>
                        <li><a href="#expert">option4</a></li>  
                        <li><NavLink exact id="btn"to="/partnerLogin">Login</NavLink>
                        </li>
                </ul>
            </header>
        )
    }
}
