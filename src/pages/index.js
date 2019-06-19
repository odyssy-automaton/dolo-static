import React from 'react';
import { TwitterShareButton} from 'react-twitter-embed';

import Layout from '../components/layout/layout';

import './styles/index.scss';
import doloBanner from '../images/dolo__background--transparent.png';
import MatrixGraphic from '../images/dolo-matrix.png';

const IndexPage = () => (
  <Layout>
    <div className="Layout">
      <div className="block hero background--image" style={{backgroundImage: 'url(' + doloBanner + ')', backgroundColor: '#fff'}}>
        <div className="contents">
          <h1>DOLO is a decentralized open learning organism, built and run by its members, iterating towards a smarter education system for all.</h1>
        </div>
      </div>
      <div className="block challenge">
        <div className="contents">
          <h2>Education as we know it is f***ed.</h2>
          <h2>But there is now a way forward.</h2>
          <p>Schooling in its current form is under immense pressure to adapt to the rapid pace of knowledge, worldwide interdependence, the rate of technological change, and frustrations with quality. Further, rapid changes in our society mean that learners need a wide array of emergent skills, many of which are not fully understood or codified for learning today, much less tomorrow. The skills needed today change so fast that no education system can keep up with the constant need to reinvent how we work and live together. Therefore, schooling as a system -- conceived philosophically and operationalized through institutions and technologies -- must evolve to meet the demands of a new era where the fluid and rapid flow of information, rooted in goodness, is what matters most.</p>
          <div className="MatrixGraphic">
            <img src={MatrixGraphic} alt="Education Matrix" />
          </div>
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
                <li>Technology</li>
                <li>Software</li>
                <li>Decentralized</li>
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
      <div className="block solution">
        <div className="contents">
          <h2>Radical changes in society demand that we reconsider – recode – our approach to teaching and learning.</h2>
          <p>As once-dominant institutions that defined “education” continue to fragment, a recode to our way of thinking (a new philosophy) is needed.  We invite educators, technologists, researchers, economists and supporters to help us shape this philosophy, and to envision the technology that will move us into a world of open learning on a new dimension. This is but one way forward. This is DOLO.</p>
          <p>DOLO is a call to bring together the best ideas into a Decentralized Open Learning Organism. DOLO is a network where educators and technologists come together to envision and iterate an education system, or platform, that mirrors the natural environment. What will that look like? We have no idea, but that's the point. All great ideas start with Genesis.</p>
        </div>
      </div>
      <div className="block step--1" id="organize">
        <div className="contents">
          <div className="Grid">
            <div className="Grid__Column--50">
              <h4>Step 1.</h4>
              <h2>Genesis (Organize)</h2>
              <p>We invite educators, technologists, economists, and other creators to share ideas on the core values and functionality that will shape DOLO’s future.</p>
              <p className="large"><a href="https://twitter.com/orgdolo" rel="noopener noreferrer" target="_blank">Follow DOLO</a> on Twitter</p>
              <h4 className="Signal">
                Signal your support
              </h4>
                <div className="TwitterShareButton"><TwitterShareButton
                    options={{ text: 'I support a future of education that is smarter, faster, and accessible to all. Join us.', via: 'orgdolo', size: 'large' }}
                    url={'https://dolo.org'}
                />
                </div>
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
              <p>An unstoppable decentralized governance structure will guide our work, allowing us to coordinate in new ways that foster collaboration and action.</p>
              <p className="large">Read <a href="https://medium.com/odyssy/how-can-decentralization-help-education-3820416030df" rel="noopener noreferrer" target="_blank">"How Can Decentralization Help Education?"</a></p>
              <p className="large">Join the DAO (coming soon).</p>
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
              <h2>Iterate (Create)</h2>
              <p>A sandbox of what is real and possible will keep us moving forward. Let's share, create, code, and play.</p>
              <h4>Everyone</h4>
              <p><a href="https://t.me/joinchat/IJqu9w9GgBScrKbU0bCRLA" rel="noopener noreferrer" target="_blank">Join Public Chat</a></p>
              <h4>Educators, Thought Leaders, Economists, etc</h4>
              <p className="large">Join the DOLO Wiki (coming soon)</p>
              <h4>Designers, Developers, Data Scientists, etc</h4>
              <p className="large">Contribute to DOLO Technology (coming soon)</p>
            </div>
            <div className="Grid__Column--50">&nbsp;</div>
          </div>
        </div>
      </div>
      <div className="block challenge contact" id="contact">
        <div className="contents">
          <div className="Grid">
            <div className="Grid__Column--50">
              <h4>Make Contact</h4>
              <h2>Let's build the future together</h2>
              <p>If you're a member of a team, community, or organization working on recoding the future of education, we would love to hear from you.</p>
              <p className="large">Say <a href="mailto:hello@dolo.org">hello@dolo.org</a></p>
            </div>
            <div className="Grid__Column--50">&nbsp;</div>
          </div>
        </div>
      </div>
      <div className="footer block">
        <div className="contents">
          <p>© DOLO</p>
          <a href="https://t.me/joinchat/IJqu9w9GgBScrKbU0bCRLA" className="button" rel="noopener noreferrer" target="_blank">Join Public Chat</a>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
