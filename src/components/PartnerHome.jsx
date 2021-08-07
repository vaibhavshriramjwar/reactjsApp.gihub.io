import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Header from '../blocks/PartnerHeader'
import Banner from '../blocks/PartnerBanner'

export default class PartnerHome extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    render() {
        return (
            <div>
               <Header /> 
               <Banner />
            </div>
        )
    }
}
