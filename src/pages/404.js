import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Helmet from "react-helmet";

const NotFoundPage = () => (
  <Layout>
      <SEO/>
      <Helmet>
      <title>Valley Property Solutions | Whoops!</title>
      <meta name="description" content="Can't find what you are looking for?" />
      <meta name="robots" content="noindex" />
      </Helmet>

    <div id="main" className="alt">
        <section id="one">
            <div className="inner">
                <h1>NOT FOUND</h1>
                <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            </div>
        </section>
    </div>
  </Layout>
)

export default NotFoundPage
