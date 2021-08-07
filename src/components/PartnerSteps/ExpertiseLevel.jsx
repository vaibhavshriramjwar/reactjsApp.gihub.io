import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../../blocks/PartnerFormHeader';
import Footer from '../../blocks/Footer';
import './AccountSetup.css';

export default class ExpertiseLevel extends Component {
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
                        <h3 class="faint-h3">Expertise Level </h3>
                    </div>
                        <br/>
                        <br/>
                        <br/>
                    <div class="sec-block-3">
                       <h3 class="sec-h3">What is your level of experience in this field ?</h3>
                    </div>
                   




                     <div class="main-container">
    
                    <div class="radio-buttons">
                        <label class="custom-radio">
                          <input type="radio" name="radio" />
                          <span class="radio-btn"
                            ><i class="las la-check"></i>
                            <div class="hobbies-icon">
                            <i class="far fa-star"></i>
                              <h3>Entry Level</h3>
                              <p class="para">I am relatively new to this field</p>
                            </div>
                          </span>
                        </label>
                        <label class="custom-radio">
                          <input type="radio" name="radio" />
                          <span class="radio-btn"
                            ><i class="las la-check"></i>
                            <div class="hobbies-icon">
                            <i class="far fa-star"></i>
                              <h3>Intermediate</h3>
                              <p class="para">I have substantial experience in this field</p>
                            </div>
                          </span>
                        </label>
                        <label class="custom-radio">
                          <input type="radio" name="radio" />
                          <span class="radio-btn"
                            ><i class="las la-check"></i>
                            <div class="hobbies-icon">
                            <i class="far fa-star"></i>
                              <h3>Expert</h3>
                              <p class="para">I have comprehensive and deep expertise in this field</p>
                            </div>
                          </span>
                        </label>
                        
                      </div>
                    </div>


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
