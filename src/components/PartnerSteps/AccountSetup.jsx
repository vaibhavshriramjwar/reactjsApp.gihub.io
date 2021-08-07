import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../../blocks/PartnerFormHeader';
import Footer from '../../blocks/Footer';
import './AccountSetup.css';
import img from '../styles/images/mainten.png';
import { NavLink } from 'react-router-dom';


export default class AccountSetup extends Component {


    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }


    static propTypes = {
        prop: PropTypes
    }

    render() {

        const {values}=this.props;

        return (
            <>
            <div>
                <Header/>
                <section class="form">


                    <div class="block">

                        <div class="sec-block">
                                <h3 class="h3-style">Get Started</h3>
                                <img class="img-b" src={img}/>
                        </div>
                        
                        
                        
                        <div class="sec-block-2">
                                <h3 class="h3-1">Join entrix to grow your customer</h3>
                                <p class="p-1">Hi Contact,</p>
                                <p class="p-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. the industry's standard dummy text ever since</p>
                                <p class="p-3">It is a long established fact that a reader will be distracted by the readable content</p>
                                <div class="bt">
                                <a class="btn-blo"href="#expert"onClick={this.continue}>Continue</a>
                                </div>
                                

                        </div>

                    </div>

           
                </section>
            <Footer />
            </div>
            </>
        )
    }
}
