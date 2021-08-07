import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ms from '../images/ms.png'
import '../blocks/Slider.css'

export default class Slider extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <section class="sec">
        <div class="wrapper-2">
                <div class="slider">
                  <div class="slide">
                    <img src={ms} />
                    <img src={ms} />
                    <img src={ms} />
                    <img src={ms} />
                    <img src={ms} />
                    <img src={ms} />
                    <img src={ms} />
                  </div>
                  <div class="slide">
                    <img src={ms} />
                    <img src={ms} />
                    <img src={ms} />
                    <img src={ms} />
                    <img src={ms} />
                    <img src={ms} />
                    <img src={ms} />
                  </div>
                </div>
            </div>

            <br/>
        <br/>
    </section>
        )
    }
}
