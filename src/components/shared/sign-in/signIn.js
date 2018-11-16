import React, { Component } from 'react';
import { navigate } from 'gatsby';

import { BrowserInfo } from '../../../services/web3Service';

import './signIn.scss'

class SignIn extends Component {
  state = {
    browserInfo: {},
    showBrowserMessage: false,
  };

  componentDidMount() {
    const browserInfo = new BrowserInfo();
    this.setState({
      browserInfo
    });
  }

  enterMemberLounge = () => {
    navigate('/member');
  }

  toggleMessage = () => {
    if (!this.state.browserInfo.metaMaskSupport) {
      this.setState({
        showBrowserMessage: !this.state.showBrowserMessage,
      })
    }
  }

  render() {
    const { browserInfo, showBrowserMessage } = this.state;
    const circleClass = (browserInfo && browserInfo.metaMaskSupport) 
      ? "Member__circle enabled" 
      : "Member__circle not-enabled";

    return (
      <div onMouseEnter={this.toggleMessage} onMouseLeave={this.toggleMessage}>
        <span onClick={this.enterMemberLounge}>
          Members Lounge
          <div className={circleClass}></div>
        </span>
        { showBrowserMessage ? 
          <p className="Member-warning">Use a better browser, buster</p>
          : null
        }
      </div>
    )
  }

}

export default SignIn