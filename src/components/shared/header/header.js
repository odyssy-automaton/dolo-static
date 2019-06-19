import React from 'react'
import { Link } from 'gatsby'

import './header.scss'
import doloLogo from '../../../images/dolo__brand--logo--standard.svg'

const Header = ({ siteTitle }) => (
  <div>
    <div className="Header">
      <div className="Header__title">
        <Link to="/">
          <img src={doloLogo} alt="DOLO"/>
        </Link>
      </div>
      <div className="Header__spacer"></div>

      <a className="Header__link" href="#organize">Organize</a>
      <a className="Header__link" href="#coordinate">Coordinate</a>
      <a className="Header__link" href="#create">Create</a>
      <a className="Header__link" href="#contact">Contact</a>
    </div>
  </div>
)

export default Header
