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
    loading: true,
  };

  async componentDidMount() {
    try {
      const web3Info = new Web3Info();
      await web3Info.init();

      this.setState({
        web3Info,
        accounts: web3Info.accounts,
        loading: true,
      });

      if (web3Info.accounts.length) {
        const authService = new AuthService()

        const storageToken = authService.checkToken();

        if (storageToken && await authService.tokenAuth(web3Info.accounts[0], storageToken)) {
          this.setState({
            token: authService.checkToken(),
            authenticated: true,
            loading: false,
          });
        } else {
          const message = await authService.getMessage()

          const sig = await web3Info.getSignature(message);

          const authenticated = await authService.signMessage(web3Info.accounts[0], sig)

          this.setState({
            token: authService.checkToken(),
            authenticated,
            loading: false,
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
    const { authenticated, loading } = this.state;

    return (
      <div className="Member">
        <div className="Member__container">
          <div className="Member__hero">
            <h1>Member Lounge</h1>
          </div>
          { authenticated && !loading ?
          (
              <div className="Member__Validated">
                <div className="Member__Validated--hero">
                  <h2>Hey there DOLO Member!</h2>
                  <p className="large">We've compiled all current resources to assist you in participating within the DOLO Community. </p>
                </div>
                <div className="Member__Contents">
                  <h6>Resources</h6>
                  <p><strong>Telegram</strong> is used as our public channel, serving as the lobby for those outside of DOLO to communicate with members. Share the link below to invite others to the Telegram.</p>
                  <a href="https://t.me/joinchat/IJqu9w9GgBScrKbU0bCRLA" target="_blank">Go to Telegram</a>
                  <pre>https://t.me/joinchat/IJqu9w9GgBScrKbU0bCRLA</pre>

                  <p><strong>Slack</strong> is the main method for members to communicate and collaborate with other members of the DOLO community. Share the link below to invite others to our Slack.</p>
                  <a href="https://bit.ly/2DFYz6l" target="_blank">Go to Slack</a>
                  <pre>https://bit.ly/2DFYz6l</pre>

                  <p><strong>Google Drive</strong> is used for the file storage and sharing, as well as document creation and collaborative editing.</p>
                  <a href="https://drive.google.com/drive/folders/1kRtQ5usq4f9mow4uLOd4z8hroTayb6TM?usp=sharing" target="_blank">Go to DOLO Drive</a>
                  <pre>https://drive.google.com/drive/folders/1kRtQ5usq4f9mow4uLOd4z8hroTayb6TM?usp=sharing</pre>

                </div>
              </div>

          ) : !loading ? (
            <div className="members-only">
              <h2>MEMBERS ONLY</h2>
              <p className="large">This area can only be accessed by members of the DOLO community.</p>
              <p>To join our community, go to <a target="_blank" href="https://app.nativeproject.one">Native</a>.</p>
            </div>
          ) : (
            <div className="loading">
              <h2>Validating Member Status ...</h2>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default memberSection;
