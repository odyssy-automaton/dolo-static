import React, { Component } from 'react'

import { Web3Info } from '../../services/web3Service';
import AuthService from '../../services/auth';

import './memberSection.scss'

class memberSection extends Component {

  state = {
    accounts: null,
    token: null,
    web3Info: {},
    authenticated: false,
  };

  async componentDidMount() {
    try {
      const web3Info = new Web3Info();
      await web3Info.init();

      this.setState({
        web3Info,
        accounts: web3Info.accounts
      });

      if (web3Info.accounts.length) {
        const authService = new AuthService()

        const storageToken = authService.checkToken();

        if (storageToken && await authService.tokenAuth(web3Info.accounts[0], storageToken)) {
          this.setState({
            token: authService.checkToken(),
            authenticated: true,
          });
        } else {
          const message = await authService.getMessage()

          const sig = await web3Info.getSignature(message);

          const authenticated = await authService.signMessage(web3Info.accounts[0], sig)

          this.setState({
            token: authService.checkToken(),
            authenticated
          });
        }
      }
      
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.log(error);
    }
  }

  render() {
    const { authenticated } = this.state;

    return (
      <div className="Member">
        <div className="Member__spacer"></div>
        <h1>Member Lounge</h1>
        { authenticated ? 
        (
          <h2>Welcome Member!</h2>
        ) : (
          <h2>MEMBERS ONLY</h2>
        )}
      </div>
    )
  }
}


export default memberSection;