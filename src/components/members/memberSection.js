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

      console.log(web3Info)
      console.log(web3Info.accounts)
      if (web3Info.accounts.length) {
        const authService = new AuthService()

        const storageToken = authService.checkToken();

        console.log('storageToken')
        console.log(storageToken)

        // const validToken = await authService.tokenAuth(web3Info.accounts[0], storageToken);


        if (storageToken && await authService.tokenAuth(web3Info.accounts[0], storageToken)) {
          this.setState({
            token: authService.checkToken(),
            authenticated: true,
          });
        } else {
          const message = await authService.getMessage()

          console.log(message)

          // web3Info.getSignature();

          const sig = await web3Info.getSignature(message);

          console.log(sig)

          await authService.signMessage(web3Info.accounts[0], sig)

          const isMember = await authService.checkDoloMembership(web3Info.accounts[0], authService.checkToken());

          console.log('isMember')
          console.log(isMember)

          this.setState({
            token: authService.checkToken(),
            authenticated: isMember,
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
      <div>
        <h1 className="Member">Member Lounge</h1>
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