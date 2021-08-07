import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Banner.css';

export default class Banner extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return ( 
            <section class="banner" id="home">
                <div class="content">
                <h2>Find Near by Contractors for Your Construction</h2>
            <p>Choose from a range of categories and prices</p>
            <div class="wrapper">
                    <input type="text" class="input" 
                         placeholder="Add Your Location"/>
                    <div class="searchbtn">
                        <h3>Search</h3>
                    </div>
            </div>
                </div>
            </section>
        )
    }
}
