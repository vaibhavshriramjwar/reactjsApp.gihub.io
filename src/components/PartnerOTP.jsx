import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './styles/PartnerOTP.css';

import Safe from "react-safe"
import Footer from '../blocks/Footer';
import { NavLink } from 'react-router-dom';
import mob_ic from './styles/images/mob_ic.png';
import Header from '../blocks/PartnerLoginHeader';

export default class PartnerOTP extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <>
            <div>
            <Header /> 
            <section class="otp-Banner-par">
            <div class="login-Content">
                <div class="log-tab">
                    <div class="tabs">
                        <div class="pl-rect1">
                            <h2>Verify OTP</h2>
                        </div>
                        <div class="pl-para">
                            <img src={mob_ic}/>
                            <h3>Enter OTP</h3>
                            <p>Please enter your Country Code
                                    and Phone number for verification</p>
                        </div>

                        <div class="inp">
                               

                            <input type="text" class="input-number-otp" maxlength="4"
                            placeholder="Enter OTP"/>


                        </div>
                        
                        <div class="btn-log-p">
                        <NavLink exact className="partner-login-btn" to="/partnerForm">Send OTP</NavLink>
                        </div>

                    </div>
                </div>
            </div>
            
                 

                <div class="tran-text-otp">
                    <h2>Verify Your OTP</h2>
                    <p>Check our blogs fro more information</p>

                   


                </div>
            </section>
            <Footer/>
                    
            </div>
            </>
        )
    }
}
