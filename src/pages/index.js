import React from 'react'

import Layout from '../components/layout/layout'

import './styles/index.scss'
import doloBanner from '../images/dolo__brand.jpg'
import doloLogo from '../images/dolo__brand--logo--standard.svg'
import nativeLogo from '../images/ntv__logo--primary.svg'

const IndexPage = () => (
  <Layout>
    <div className="block background--image" style={{backgroundImage: 'url(' + doloBanner + ')'}}>
      <div className="contents">
        <p> </p>
      </div>
    </div>
    <div className="block intro creamer">
      <div className="contents">
        <p>DOLO is a decentralized open learning organization, built and run by its members, iterating towards a smarter education system for all.</p>
        <a className="button">Join the Conversation</a>
      </div>
    </div>
    <div className="block documentation">
      <div className="contents">
        <img className="doloLogo" src={doloLogo} />
        <p>Feel free to view our current documentation. We will continue to iterate and publish updates as they are made available.</p>
        <a href="/" className="button large">View Documentation (v0.1)</a>
      </div>
    </div>
    <div className="block native creamer">
      <div className="contents">
        <img src={nativeLogo} />
        <p>We’ve partnered with Native to launch our own cryptocurrency for the DOLO community. It’s called the DOLO Token (DOLO)</p><p>You can join DOLO on the Native platform.</p>
        <a href="/" className="button large">Join DOLO</a>
      </div>
    </div>
    <div className="footer block">
      <div className="contents">
        <p>© DOLO</p>
        <a href="/" className="button">Join DOLO</a>
      </div>
    </div>

  </Layout>
)

export default IndexPage
