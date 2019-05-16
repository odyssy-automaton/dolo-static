import React from 'react';

import Layout from '../components/layout/layout';

import './styles/index.scss';
import doloBanner from '../images/dolo__background--transparent.png';
import doloLogo from '../images/dolo__brand--logo--standard.svg';

const IndexPage = () => (
  <Layout>
    <div className="block hero background--image" style={{backgroundImage: 'url(' + doloBanner + ')', backgroundColor: '#fff'}}>
      <div className="contents">
        <h1>DOLO is a decentralized open learning organism, built and run by its members, iterating towards a smarter education system for all.</h1>
        <p><a href="https://t.me/joinchat/IJqu9w9GgBScrKbU0bCRLA" className="button">Signal your Support</a></p>
      </div>
    </div>
    <div className="block challenge">
      <div className="contents">
        <h2>Education as we know it is f***ed.</h2>
        <h2>We need to recode.</h2>
        <div className="Grid Matrix">
          <div className="Grid__Column--25">
            <div className="MatrixHeader">
              <h4>&nbsp;</h4>
              <p>&nbsp;</p>
            </div>
            <ul>
              <li>Root</li>
              <li>Influence</li>
              <li>Control</li>
              <li>Governance</li>
              <li>Scope</li>
              <li>Capital</li>
              <li>Focus</li>
              <li>Moral</li>
              <li>Benchmarks</li>
              <li>Measurement</li>
              <li>Guides</li>
              <li>Assessments</li>
              <li>Endorsements</li>
              <li>Communication</li>
            </ul>
          </div>
          <div className="Grid__Column--25">
            <div className="MatrixHeader">
              <h4>Birth</h4>
              <p>1900s</p>
            </div>
            <ul>
              <li>Industry</li>
              <li>Manufacturing</li>
              <li>Centralized</li>
              <li>Policy Leaders</li>
              <li>Local</li>
              <li>Public</li>
              <li>Production</li>
              <li>Access</li>
              <li>Job Skills</li>
              <li>Output</li>
              <li>Canon</li>
              <li>Apprenticeships</li>
              <li>Diplomas</li>
              <li>Print</li>
            </ul>
          </div>
          <div className="Grid__Column--25">
            <div className="MatrixHeader">
              <h4>Reform</h4>
              <p>1980s-2019</p>
            </div>
            <ul>
              <li>No Roots</li>
              <li>Business</li>
              <li>Quasi-Centralized</li>
              <li>Sector Leaders</li>
              <li>State/National</li>
              <li>Private</li>
              <li>Achievement</li>
              <li>Equality</li>
              <li>College Skills</li>
              <li>Data Analytics</li>
              <li>Standards</li>
              <li>Tests</li>
              <li>Certificates</li>
              <li>Email</li>
            </ul>
          </div>
          <div className="Grid__Column--25">
            <div className="MatrixHeader">
              <h4>Recode</h4>
              <p>2020+</p>
            </div>
            <ul>
              <li>Technology  ?</li>
              <li>Software  ?</li>
              <li>Decentralized  ?</li>
              <li>Peers</li>
              <li>Global</li>
              <li>Blended</li>
              <li>Creation</li>
              <li>Equity</li>
              <li>Soft Skills</li>
              <li>AI</li>
              <li>Principles</li>
              <li>Playful Gamification</li>
              <li>Badges</li>
              <li>Wikis &amp; Teamware</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="block challenge">
      <div className="contents">
        <h2>Radical changes in society demand that we reconsider – recode – our approach to teaching and learning.</h2>
        <p>DOLO is a call to bring together the best ideas into a Decentralized Open Learning Organism. Dolo is a place where educators and technologists come together to envision and iterate an education system, or platform, that mirrors the natural environment. What will that look like? We have no idea. That's the point. All great ideas start with Genesis.</p>
      </div>
    </div>
    <div className="block step--1" id="organize">
      <div className="contents">
        <div className="Grid">
          <div className="Grid__Column--50">
            <h4>Step 1.</h4>
            <h2>Genesis (Organize)</h2>
            <p>You are invited to share ideas on the core values and functionality that will shape DOLO's future.</p>
            <a href="https://nativeproject.one" className="large">Join</a>
          </div>
          <div className="Grid__Column--50">&nbsp;</div>
        </div>
      </div>
    </div>
    <div className="block step--2" id="coordinate">
      <div className="contents">
        <div className="Grid">
          <div className="Grid__Column--50">
            <h4>Step 2.</h4>
            <h2>Synthesis (Coordinate)</h2>
            <p>An unstoppable, decentralized governance structure will guide our collective work.</p>
            <a href="https://nativeproject.one" className="large">Learn More</a>
          </div>
          <div className="Grid__Column--50">&nbsp;</div>
        </div>
      </div>
    </div>
    <div className="block step--3" id="create">
      <div className="contents">
        <div className="Grid">
          <div className="Grid__Column--50">
            <h4>Step 3.</h4>
            <h2>Emphasis (Iterate)</h2>
            <p>A sandbox of what is real and possible will keep us moving forward. Let's share, create, code, and play.</p>
            <a href="https://nativeproject.one" className="large">Learn More</a>
          </div>
          <div className="Grid__Column--50">&nbsp;</div>
        </div>
      </div>
    </div>
    <div className="block step--3">
      <div className="contents">
        <h2>...</h2>
        <p>Ongoing </p>
        <h3>Learn</h3>
        <a href="https://nativeproject.one" className="">Medium</a>
        <h3>Connect</h3>
        <a href="https://nativeproject.one" className="">Slack</a>
        <a href="https://nativeproject.one" className="">Discord</a>
        <h3>Code</h3>
        <a href="https://nativeproject.one" className="">Github</a>
      </div>
    </div>
    <div className="footer block">
      <div className="contents">
        <p>© DOLO</p>
        <a href="https://nativeproject.one" className="button">Join DOLO</a>
      </div>
    </div>

  </Layout>
)

export default IndexPage
