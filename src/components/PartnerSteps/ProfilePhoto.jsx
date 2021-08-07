import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../../blocks/PartnerFormHeader';
import Footer from '../../blocks/Footer';
import img from '../styles/images/iconp.png';


export default class ProfilePhoto extends Component {
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
                            <h3 class="faint-h3">Profile Photo </h3>
                        </div>
                    <br/>
                        
                    <div class="sec-block-34">
                        <img class="img-profile" src={img} />
                        <br/>
                    </div>



                    <div class="bn">
                         <a class="btn-blo-3"href="#expert">Select Profile Picture</a>
                    </div>

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
