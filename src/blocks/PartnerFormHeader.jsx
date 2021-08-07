import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../blocks/PartnerFormHeader.css';

export default class PartnerFormHeader extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <header class="hed">
            <a href="#"class="logo">entrix<span>.</span> partner</a>
           
            </header>
        )
    }
}
