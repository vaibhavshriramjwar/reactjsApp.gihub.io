import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../../blocks/PartnerFormHeader';
import Footer from '../../blocks/Footer';



export default class TitleOver extends Component {
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
                        <h3 class="faint-h3">Title & Overview</h3>
                    </div>

                        <br/>
                        <br/>
                        <br/>

                    <div class="sec-block-3">
                       <h4 class="txt-title-5">Title</h4>
                       <div class="col-5">
                            <input class="company-txt" type="text" id="fname" name="firstname"/>
                        </div>


                        <h4 class="txt-title-2">Professional Overview</h4>
                        <div class="col-5">
                        <textarea  class="desc-text" name="comment"placeholder="Add description here"></textarea>                        </div>


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
          
                <Footer/>
            </div>  
            </>
        )
    }
}
