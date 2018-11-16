import React, { Component } from 'react'

import { Web3Info, BrowserInfo } from '../../../util/getWeb3';

import './signIn.scss'

class SignIn extends Component {
  state = {
    accounts: null,
    browserInfo: {},
    web3Info: {},
    showBrowserMessage: false,
  };

  componentDidMount() {
    const browserInfo = new BrowserInfo();
    console.log(browserInfo)
    this.setState({
      browserInfo
    });
  }

  signIn = async () => {
    try {
      const web3Info = new Web3Info();
      await web3Info.init();
      this.setState({
        web3Info
      });
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.log(error);
    }
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
        <span onClick={this.signIn}>
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