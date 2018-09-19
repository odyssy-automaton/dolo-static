import React from 'react'
import { Link } from 'gatsby'

import './header.scss'

const Header = ({ siteTitle }) => (
  <div>
    <div className="Header">
      <h1 className="Header__title">
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <div className="Header__spacer"></div>

      <a className="Header__link" target="_blank" rel="noopener noreferrer" href="https://odyssy.io">About</a>
      <a className="Header__link" target="_blank" rel="noopener noreferrer" href="https://odyssy.io">Telegram</a>
      <a className="Header__link" target="_blank" rel="noopener noreferrer" href="https://odyssy.io">Prototype</a>
    </div>
  </div>
)

export default Header
