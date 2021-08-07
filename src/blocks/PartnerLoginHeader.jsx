import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../blocks/PartnerLoginHeader.css';

export default class PartnerLoginHeader extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <header>
            <a href="#"class="logo">entrix<span>.</span> partner</a>
           
            </header>
        )
    }
}
