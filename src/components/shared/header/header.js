import React from 'react'
import { Link } from 'gatsby'

import SignIn from '../sign-in/signIn';
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

      <a className="Header__link" target="_blank" rel="noopener noreferrer" href="https://t.me/joinchat/IJqu9w9GgBScrKbU0bCRLA">Telegram</a>
      <a className="Header__link" target="_blank" rel="noopener noreferrer" href="https://nativeproject.one">Native</a>
      <a className="Header__link" target="_blank" rel="noopener noreferrer" href="https://odyssy.io">Odyssy</a>
      <a className="Header__link"><SignIn></SignIn></a>
    </div>
  </div>
)

export default Header
