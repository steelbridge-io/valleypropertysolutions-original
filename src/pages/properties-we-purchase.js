import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import SEO from '../components/seo'

import pic11 from '../assets/images/pic11.jpg'
import {Link} from "gatsby";

const Properties = (props) => (
    <Layout>
        <SEO />
        <Helmet>
            <title>Valley Property Solutions | About The Properties We Purchase</title>
            <meta name="description" content="Discover how to sell your home as a for sell by owner. We help homeowners sell their home and bypass lengthy Realestate sales processes. Find out about the properties we purchase." />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major landing1">
                        <h1>Properties We Purchase</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <h3>What Properties Catch Our Attention?</h3>
                    <p>Valley Property Solutions, LLC is a residential redevelopment company. Residential redevelopment is renovating outdated or damaged homes and making them have a more clean, modern feeling to them. We believe that residential redevelopment is essential to the growth of new America and we’re proud to help contribute. If you have a house for sale that’s outdated, or just needs some T.L.C. don’t hesitate to give us a call at <a href="tel:15304462271" title="Telephone Number">(530) 446-2271</a>. A majority of our focus goes to purchasing these type of properties. Since we remodel the house anyway, we love to buy in "as is” condition. Your time is valuable to us so please give us a call so we can give you an all cash offer and close at lightning fast speeds.</p>

                    <h4>For Sale By Owner</h4>
                    <p>Houses that are for sale by owner catch our attention because this means a possible wholesale deal.</p>


                    <ul className="actions welike">
                        <li><Link to="/wholesaling" className="button">Learn More About Wholesaling</Link></li>
                    </ul>

                </div>
            </section>
        </div>

    </Layout>
)

export default Properties
