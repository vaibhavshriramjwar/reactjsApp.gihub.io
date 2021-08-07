import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../blocks/PartnerBanner.css'
import { NavLink } from 'react-router-dom';

export default class PartnerBanner extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <section class="partner-banner" id="home">
            <div class="partner-content">
            <h2>Find Near by Contractors for Your Construction</h2>
            <p class="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            
            <NavLink exact className="partner-btn" to="/dashboard">Login as partner</NavLink>
            </div>
        </section>
        )
    }
}
