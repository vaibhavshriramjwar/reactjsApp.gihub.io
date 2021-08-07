import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../../blocks/PartnerFormHeader';
import Footer from '../../blocks/Footer';
import './AccountSetup.css';

export default class Rate extends Component {
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
                        <h3 class="faint-h3">Rate </h3>
                    </div>

                        <br/>
                        
                        

                    <div class="sec-block-3">
                       <h4 class="txt-title-3">Clients will see this rate on your profile and in search result once you publish your profile.
You can adjust your rate every time you submit a proposal</h4>
                    </div>

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
