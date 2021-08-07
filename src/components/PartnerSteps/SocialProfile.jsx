import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Header from '../../blocks/PartnerFormHeader';
import Footer from '../../blocks/Footer';
import './AccountSetup.css';
import img from '../styles/images/mainten.png';

export default class SocialProfile extends Component {


    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    back = e=>{
        e.preventDefault();
        this.props.prevStep();
    }


    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <>
            <div>
            <Header/>
                <section class="form">
                    <div class="block">
                    <div class="faint-b">
                        <h3 class="faint-h3">Fill out your profile to apply</h3>
                    </div>
                        <br/>
                        <br/>
                        <br/>
                    <div class="sec-block-2">
                        <h3 class="h3-1">Join entrix to grow your customer</h3>
                        <p class="p-1">Hi Contact,</p>
                        <p class="p-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. the industry's standard dummy text ever since</p>
                        <p class="p-3">It is a long established fact that a reader will be distracted by the readable content</p>
                    </div>

                    <br/>
                    <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    <div class="btn-group">
                        <a class="btn-blo-1"href="#expert"onClick={this.back}>previous</a>
                        <a class="btn-blo-2"href="#expert"onClick={this.continue}>Continue</a>
                    </div>
                   
                    </div>

           
                </section>
            <Footer />
            </div>
           
            </>
        )
    }
}
