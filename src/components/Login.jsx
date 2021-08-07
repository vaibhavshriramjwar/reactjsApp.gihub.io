import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles/Login.css'
import './styles/images/bg3.png'
import Sticky from '../components/styles/sticky'

import Header from '../blocks/Header'
import Safe from "react-safe"

export default class Login extends Component {
    static propTypes = {
        prop: PropTypes
    }

     openCity(cityName) {
      var i;
      var x = document.getElementsByClassName("city");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      document.getElementById(cityName).style.visibility = "block";  
      }

    render() {
        return (
            <>
            <Header/>
            <section class="login-Banner">
            <div class="login-Content">
                <div class="log-tab">
                    <div class="tabs">

                        <ul role="tablist">
                            
                            <li>
                                <input type="radio" name="tabs" id="tab1" checked />
                                <label for="tab1" role="tab" aria-selected="true" aria-controls="panel1" tabindex="0">Login</label>
                                        <div id="tab-content1" class="tab-content" role="tabpanel" aria-labelledby="description" aria-hidden="false">
                                        <h2>Log In</h2>
                                        <center>
                                        <div class="frm-d">
                                        <form class="log-box" action="index.html" method="post">
                                        <input type="text" name="" placeholder="Email" required/>
                                        <input type="password" name="" placeholder="Password"/>
                                        <input type="submit" name="" value="Login"/>

                                            <h4>Or</h4>
                                        <div class="col">
                                        <button class="loginBtn loginBtn--facebook">
                                                Login with Facebook
                                                </button>

                                                <button class="loginBtn loginBtn--google">
                                                Login with Google
                                                </button>
                                        </div>

                                    </form>
                                    </div>
                                        </center>
                                        </div>
                            </li>
                            <li>
                                <input type="radio" name="tabs" id="tab2" />
                                <label for="tab2" role="tab" aria-selected="false" aria-controls="panel2" tabindex="0">Sign Up</label>
                                <div id="tab-content2" class="tab-content" role="tabpanel" aria-labelledby="specification" aria-hidden="true">
                                <h2>Sign Up</h2>
                                <center>
                                <div class="frm-d">
                                <form class="log-box" action="index.html" method="post">
                                        <input type="text" name="" placeholder="Email" required/>
                                        <input type="text" name="" placeholder="Email" required/>
                                        <input type="text" name="" placeholder="Email" required/>
                                        <input type="password" name="" placeholder="Password"/>
                                        <input type="submit" name="" value="Login"/>

                                    <h4>Or</h4>
                                <div class="col">
                                <button class="loginBtn loginBtn--facebook">
                                        Login with Facebook
                                        </button>

                                        <button class="loginBtn loginBtn--google">
                                        Login with Google
                                        </button>
                                </div>

                            </form>
                            </div>
                                </center>
                                </div>     
                            </li>
                        
                        </ul>

                    </div>
                </div>
            </div>
            
                 <Safe.script src={Sticky}></Safe.script>
            <Safe.script>{
            `try{Typekit.load({ async: true });}catch(e){}`
            }
            </Safe.script>

            <div class="tran-text">
                    <h2>Find Near by Contractors for Your Construction</h2>
                    <p>Check our blogs fro more information</p>
                </div>
            </section>
            </>
        )
    }
}
