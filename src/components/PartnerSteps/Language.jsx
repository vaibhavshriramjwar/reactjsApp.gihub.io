import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../../blocks/PartnerFormHeader';
import Footer from '../../blocks/Footer';

export default class Language extends Component {
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
                        <h3 class="faint-h3">Language </h3>
                    </div>
                        <br/>
                        <br/>
                        <br/>
                    <div class="sec-block-3">
                       <h3 class="sec-h3">Choose your primary language</h3>
                    </div>
                    <div class="col-75">
                        <select class="country" id="lang" name="lang">
                            <option class="con" value="English">English</option>
                            <option class="con" value="Marathi">Marathi</option>
                            <option class="con" value="Hindi">Hindi</option>
                        </select>
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
            </div> </>
        )
    }
}
