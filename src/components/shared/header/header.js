import React from 'react'
import { Link } from 'gatsby'

import './header.scss'
import doloLogo from '../../../images/dolo__brand--logo--standard.svg'

const Header = ({ siteTitle }) => (
  <div>
    <div className="Header">
      <h1 className="Header__title">
        <Link to="/">
          <img src={doloLogo} alt="DOLO"/>
        </Link>
      </h1>
      <div className="Header__spacer"></div>

      <a className="Header__link" href="#organize">Organize</a>
      <a className="Header__link" href="#coordinate">Coordinate</a>
      <a className="Header__link" href="#create">Create</a>
    </div>
  </div>
)

export default Header
