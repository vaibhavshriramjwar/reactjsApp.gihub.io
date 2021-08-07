import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './styles/PartnerLogin.css';
import Footer from '../blocks/Footer';
import { NavLink } from 'react-router-dom';
import Header from '../blocks/PartnerLoginHeader';
import Banner from '../blocks/PartnerBanner'

export default class PartnerLogin extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    render() {
        return (
            <>
            <div>
            <Header /> 
            <section class="login-Banner-par">
            <div class="login-Content">
                <div class="log-tab">
                    <div class="tabs">
                        <div class="pl-rect1">
                            <h2>Login With Phone Number</h2>
                        </div>
                        <div class="pl-para">
                            <h3>Verify Your Mobile Number</h3>
                            <p>Please enter your Country Code
                                    and Phone number for verification</p>
                        </div>

                        <div class="inp">
                                <div class="input-init">
                                    <h3>+91</h3>
                                </div>

                            <input type="text" class="input-number" maxlength="10"
                            placeholder=""/>


                        </div>
                        
                        <div class="btn-log-p">
                        <NavLink exact className="partner-login-btn" to="/partnerOtp">Send OTP</NavLink>
                        </div>

                    </div>
                </div>
            </div>
            
            

                <div class="tran-text">
                    <h2>Find Near by Contractors for Your Construction</h2>
                    <p>Check our blogs fro more information</p>
                </div>
            </section>
           
            <Footer/>
            </div>
           
                
            </>
        )
    }
}
