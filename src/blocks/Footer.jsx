import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Footer.css'
import 'react-fontawesome'

export default class Footer extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <section class="foot">
            <footer>
                <div class="main-content">
                <div class="left box">
                    <h2>Serving In</h2>
                    <div class="content">
                        <div class="list">
                            <ul class="b">
                                <li>Amravati</li>
                                <li>Nagpur</li>
                                <li>Yavatmal</li>
                                <li>Washim</li>
                                <li>Gondia</li>
                                <li>Buldhana</li>
                            </ul>
                        </div>
                    
                    
                    <div class="social">
                        <a href="https://facebook.com/coding.np"><span class="fab fa-facebook-f"></span></a>
                        <a href="#"><span class="fab fa-twitter"></span></a>
                        <a href="https://instagram.com/coding.np"><span class="fab fa-instagram"></span></a>
                        <a href="https://youtube.com/c/codingnepal"><span class="fab fa-youtube"></span></a>
                    </div>
                    </div>
                </div>
            
                <div class="center box">
                    <h2>Address</h2>
                    <div class="content">
                    <div class="place">
                        <span class="fas fa-map-marker-alt"></span>
                        <span class="text">Sainagar, Amravati</span>
                    </div>
                    <div class="phone">
                        <span class="fas fa-phone-alt"></span>
                        <span class="text">+089-765432100</span>
                    </div>
                    <div class="email">
                        <span class="fas fa-envelope"></span>
                        <span class="text">abc@example.com</span>
                    </div>
                    </div>
                </div>
            
                <div class="right box">
                    <h2>Contact us</h2>
                    <div class="content">
                    <form action="#">
                        <div class="email">
                        <div class="text">Email *</div>
                        <input type="email" required />
                        </div>
                        <div class="msg">
                        <div class="text">Message *</div>
                        <textarea rows="2" cols="25" required></textarea>
                        </div>
                        <div class="title">
                            <a href="#" class="btn">Send</a>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
                <div class="bottom">
                <center>
                    <span class="credit">Created By <a href="https://www.youtube.com/channel/UCa6MuTz9lbTfzAVARYq_HWQ">entrix</a> | </span>
                    <span class="far fa-copyright"></span><span> 2020 All rights reserved.</span>
                </center>
                </div>
            </footer>
        </section>
        )
    }
}
