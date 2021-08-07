import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../../blocks/PartnerFormHeader';
import Footer from '../../blocks/Footer';

export default class Location extends Component {
    static propTypes = {
        prop: PropTypes
    }

    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    back = e=>{
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        return (
            <>
            <div>
                <Header/>

                <section class="form">
                    <div class="block">

                    <div class="faint-b">
                        <h3 class="faint-h3">Location</h3>

                    </div>

                        <br/>
                        <br/>
                        <br/>

                    <div class="sec-block-3">
                       <h3 class="sec-h3">Country</h3>
                    </div>
                    <div class="col-75">
                        <select class="country-loc" id="lang" name="lang">
                            <option class="con" value="English">India</option>
                            <option class="con" value="Marathi">America</option>
                            <option class="con" value="Hindi">Japan</option>
                            <option class="con" value="English">South Korea</option>
                            <option class="con" value="Marathi">France</option>
                            <option class="con" value="Hindi">Jermany</option>
                        </select>  
                    </div>

                    <div class="sec-block-5">
                    <h4 class="txt-title-5">Street Address</h4>
                       <div class="col-55">
                            <input class="company-txt" type="text" id="fname" name="firstname"/>
                        </div>

                        <h4 class="txt-title-5">City</h4>
                       <div class="col-55">
                            <input class="company-txt" type="text" id="fname" name="firstname"/>
                        </div> 

                        <h4 class="txt-title-5">ZIP/Postal code</h4>
                       <div class="col-55">
                            <input class="company-txt" type="text" id="fname" name="firstname"/>
                        </div>    
                    </div>

                    
                    
                    <br/>
                    <br/>
                        
                        
                    <div class="btn-group">
                        <a class="btn-blo-1"href="#expert"onClick={this.back}>previous</a>
                        <a class="btn-blo-2"href="#expert"onClick={this.continue}>Continue</a>
                    </div>

                    
                </div>
            </section>
          
                <Footer/>
            </div>  
            </>
        )
    }
}
