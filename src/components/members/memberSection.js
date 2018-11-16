import React, { Component } from 'react'

import { Web3Info } from '../../services/web3Service';
import AuthService from '../../services/auth';

import './memberSection.scss'

class memberSection extends Component {

  state = {
    accounts: null,
    token: null,
    web3Info: {},
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

        console.log(storageToken)

        if (storageToken && await authService.tokenAuth(web3Info.accounts[0], storageToken)) {
          this.setState({
            token: authService.checkToken()
          });
        } else {
          const message = await authService.getMessage()

          console.log(message)

          // await web3Info.getSignature(message);


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
    console.log(this.state.web3Info.accounts)
    return (
      <div>
        <h1 className="Member">Member Lounge</h1>
      </div>
    )
  }
}


export default memberSection;