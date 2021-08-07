import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../../blocks/PartnerFormHeader';
import Footer from '../../blocks/Footer';

export default class Employment extends Component {
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

            <section class="form-em">
                    <div class="block-em">
                    <div class="faint-b">
                        <h3 class="faint-h3">Add Employment </h3>
                    </div>
                        <br/>
                        <br/>
                        <br/>
                    <div class="sec-block-3">
                       <h4 class="txt-title">Company</h4>
                        <div class="col-5">
                            <input class="company-txt" type="text" id="fname" name="firstname"/>
                        </div>

                        <h4 class="txt-title-2">Location</h4>
                        <div class="col-5">
                            <input class="city-txt" type="text" id="fname" name="firstname" placeholder="City"/>
                            <input class="country-txt" type="text" id="fname" name="firstname"placeholder="Country"/>
                        </div>

                        <h4 class="txt-title-2">Title</h4>
                        <div class="col-5">
                            <input class="title-txt" type="text" id="fname" name="firstname" placeholder="Ex: Carpenter"/>
                        </div>

                        <h4 class="txt-title-2">Duration</h4>
                        <div class="col-5">
                            <input class="num-txt" type="text" id="fname" name="firstname" placeholder="3"/>
                        <select class="dat" id="country" name="country">
                            <option class="con" value="null">Years</option>
                            <option class="con" value="canada">Week</option>
                            <option class="con" value="usa">Day</option>
                        </select>

                        <label class="container">One
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </div>


                        <h4 class="txt-title-2">Title</h4>
                        <div class="col-5">
                        <textarea  class="desc-text" name="comment"placeholder="Add description here"></textarea>                        </div>
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
