import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../blocks/PartnerFormHeader';
import Footer from '../blocks/Footer';

import AccountSetup from './PartnerSteps/AccountSetup';
import SocialProfile from './PartnerSteps/SocialProfile';
import Expertise from './PartnerSteps/Expertise';
import ExpertiseLevel from './PartnerSteps/ExpertiseLevel';
import Employment from './PartnerSteps/Employment';
import Rate from './PartnerSteps/Rate';
import TitleOver from './PartnerSteps/TitleOver';
import ProfilePhoto from './PartnerSteps/ProfilePhoto';
import Location from './PartnerSteps/Location';
import Email from './PartnerSteps/Email';
import Language from './PartnerSteps/Language';



export default class PartnerForm extends Component {


    state ={
        step:1,
        name:'',
        email:'',
        phone:'',
        password:'',
        facebook:'',
        twitter:'',
        github:'',
    };

    nextStep = ()=>{
        const{step} = this.state;
        this.setState({step:step+1});
    }

    prevStep =()=>{
        const{step} = this.state;
        this.setState({step:step-1});
    }



    static propTypes = {
        prop: PropTypes
    }

    render() {

        const{step} = this.state;
        const{name,email,phone,password,facebook,twitter,github}=this.state;
        const values = {name,email,phone,password,facebook,twitter,github};

       switch(step){
           case 1:
               return(
                    <AccountSetup 
                        nextStep={this.nextStep}
                        values={values}
                    />
               );
            case 2:
                return(
                    <SocialProfile 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
                ); 
            case 3:
                return(
                    <Expertise 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
                );
            case 4:
                return(
                    <ExpertiseLevel 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
                ); 
            case 5:
                return(
                    <Employment
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
                )
            case 6:
                return(
                    <Rate
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                        />
                    )  

            case 7:
                return(
                    <TitleOver
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                        />
                    ) 
            case 8:
                return(
                    <Language
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                        />
                    )        
            case 9:
                return(
                    <ProfilePhoto
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                        />
                )

            case 10:
                return(
                    <Location
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                        />  
                )  
                
            case 11:
                return(
                    <Email
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                        />
                )                          


       }


    }
}
