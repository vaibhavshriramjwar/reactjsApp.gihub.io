import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Header from '../../blocks/PartnerFormHeader';
import Footer from '../../blocks/Footer';
import './AccountSetup.css';

export default class Expertise extends Component {
    static propTypes = {
        prop: PropTypes
    }


    constructor(props){
        super(props)
        this.state={
            skills:["React","Node js"]
        }
        this.inputRef=React.createRef()
    }

    //remove skill
    removeSkill =i=>{
        const skills = this.state.skills
        skills.splice(i,1)
        this.setState({
            skills:skills
        })
    }


    addSkill = e =>{
        const skills = this.state.skills
        const value  = e.target.value
        if(e.key ==="Enter"&& value)
        {
            if(skills.find(skill=>skill.toLowerCase()===value.toLowerCase()))
            {
                return alert("duplicate");
            }
            skills.push(value)
            this.setState({
                skills
            })
            this.inputRef.current.value=null
        }
        else if(e.key ==="Backspace"&& !value){
            this.removeSkill(skills.length-1)
        }
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

        const{skills} = this.state;

        return (
            <>
            <div>
            <Header/>
                <section class="form">
                    <div class="block">
                    <div class="faint-b">
                        <h3 class="faint-h3">Expertise </h3>
                    </div>
                        <br/>
                        <br/>
                        <br/>
                    <div class="sec-block-3">
                       <h3 class="sec-h3">Tell us about the work you do</h3>
                    </div>
                    <div class="col-75">
                        <select class="country" id="country" name="country">
                            <option class="con" value="null">Category</option>
                            <option class="con" value="canada">Canada</option>
                            <option class="con" value="usa">USA</option>
                        </select>

                        <div class="sec-block-4">
                            <h3 class="sec-h3">What skill do you offer clients ? </h3>
                        </div>
                    
                    <div class="skill">
                        <ul class="skill-ul">
                            {skills.map((skill,i)=>{
                                return(
                                    <li class="skill-li" key={i}>
                                        {skill}
                                        <button onClick={()=>this.removeSkill(i)}>+</button>
                                    </li>
                                )
                            })}
                            <li class="input-skill">
                                <input placeholder="Start typing your skill" onKeyDown={this.addSkill} type="text"size="4"ref={this.inputRef}/>
                            </li>
                        </ul>
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
