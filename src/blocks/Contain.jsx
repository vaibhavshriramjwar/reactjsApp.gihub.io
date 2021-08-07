import React, { Component } from 'react'
import './Contain.css';
import CON_IMG1 from '../images/img1.jpg'
import CON_IMG2 from '../images/img2.jpg'
import CON_IMG3 from '../images/img3.jpg'
import CON_IMG4 from '../images/img4.jpg'
import CON_IMG5 from '../images/img5.jpg'
import CON_IMG7 from '../images/img7.jpg'

export default class Contain extends Component {
    render() {
        return (

            <section class="menu" id="menu" >
            <div class="menu-body">
            <div class="title">
                <h2 class="titleText">Our <span>M</span>enu</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="content">
                <div class="box">
                    <div class="imgBx">
                        <img src={CON_IMG1}/>
                    </div>
                    <div class="text">
                        <h3>Salad Special</h3>
                    </div>
                </div>
    
                <div class="box">
                    <div class="imgBx">
                        <img src={CON_IMG2}/>
                    </div>
                    <div class="text">
                        <h3>Salad Special</h3>
                    </div>
                </div>
    
                <div class="box">
                    <div class="imgBx">
                        <img src={CON_IMG3}/>
                    </div>
                    <div class="text">
                        <h3>Salad Special</h3>
                    </div>
                </div>
    
                <div class="box">
                    <div class="imgBx">
                        <img src={CON_IMG4}/>
                    </div>
                    <div class="text">
                        <h3>Salad Special</h3>
                    </div>
                </div>
    
                <div class="box">
                    <div class="imgBx">
                        <img src={CON_IMG5}/>
                    </div>
                    <div class="text">
                        <h3>Salad Special</h3>
                    </div>
                </div>
    
                <div class="box">
                    <div class="imgBx">
                        <img src={CON_IMG7}/>
                    </div>
                    <div class="text">
                        <h3>Salad Special</h3>
                    </div>
                </div>
    
            
            </div>
            <div class="title">
                <a href="#" class="btn">View all</a>
            </div>
        </div>
        </section>

        )
    }
}
