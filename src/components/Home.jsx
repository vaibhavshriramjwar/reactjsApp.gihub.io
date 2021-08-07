import React, { Component } from 'react'
//import PropTypes from 'prop-types'

import Header from '../blocks/Header'
import Banner from '../blocks/Banner'
import Slider from '../blocks/Slider'
import Contain from '../blocks/Contain'
import './styles/Home.css'
import Footer from '../blocks/Footer'


export default class Home extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    componentDidMount(){
        window.addEventListener('scroll',function(){
         const header = document.querySelector('header');
            header.classList.toggle('sticky',window.scrollY > 0);
        });






    }

   

  

    render() {
        return (
            <div>
        <Header/>
        <Banner/>
        <Slider/>
        <Contain />
        <Footer />
            </div>
           
        )
    }
}
