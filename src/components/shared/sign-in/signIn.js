import React, { Component } from 'react'

import { ClientInfo } from '../../../util/getWeb3';

import './signIn.scss'

class SignIn extends Component {
  state = {
    accounts: null,
    browserInfo: {},
    web3Info: {},
  };

  // async componentDidMount() {
  //   try {
  //     const clientInfo = new ClientInfo();
  //     await clientInfo.web3Info.init();
  //     console.log('browserinfo', clientInfo.browserInfo);
  //     console.log('web3info', clientInfo.web3Info);
  //     // console.log('accounts', clientInfo.web3Info.accounts);
  //     // const accounts = clientInfo.web3Info.accounts;
  //     this.setState({
  //       // accounts,
  //       browserInfo: clientInfo.browserInfo,
  //       web3Info: clientInfo.web3Info,
  //     });
  //   } catch (error) {
  //     alert(
  //       `Failed to load web3, accounts, or contract. Check console for details.`,
  //     );
  //     console.log(error);
  //   }

  // }

  signIn = async () => {
    console.log('fuck')
    
    try {
      const clientInfo = new ClientInfo();
      await clientInfo.web3Info.init();
      console.log('browserinfo', clientInfo.browserInfo);
      console.log('web3info', clientInfo.web3Info);
      // console.log('accounts', clientInfo.web3Info.accounts);
      // const accounts = clientInfo.web3Info.accounts;
      this.setState({
        // accounts,
        browserInfo: clientInfo.browserInfo,
        web3Info: clientInfo.web3Info,
      });
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.log(error);
    }

  }

  render() {
    return (
      <span onClick={this.signIn}>Sign In</span>
    )
  }

}

export default SignIn