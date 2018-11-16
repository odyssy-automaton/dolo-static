import { ethers } from 'ethers';

export class Web3Info {
  checkWeb3andFallback(web3, resolve, reject) {
    const alreadyInjected = typeof web3 !== 'undefined';

    if (alreadyInjected) {
      const provider = new ethers.providers.Web3Provider(web3.currentProvider);
      // const signer = provider.getSigner();
      // signer.signMessage('poopin')

      resolve(provider);
    } else {
      console.log('No web3 instance injected, using Local web3.');
      //do they need to sign?
      const provider = ethers.providers.getDefaultProvider();
      resolve(provider);
    }
  }

  getWeb3() {
    return new Promise((resolve, reject) => {
      let web3 = undefined;
      if (window.ethereum) {
        window.ethereum
          .enable()
          .then((arg1) => {
            web3 = window.web3;
            this.checkWeb3andFallback(web3, resolve, reject);
          })
          .catch((arg1) => {
            reject();
          });
      } else {
        web3 = window.web3;
        this.checkWeb3andFallback(web3, resolve, reject);
      }
    });
  }

  async getSignature(msg) {
    const signer = this.web3.getSigner();
    return signer.signMessage(msg)
  }

  async init() {
    this.web3 = this.web3 || (await this.getWeb3());
    await this.web3.listAccounts()
      .then(result => {
        this.accounts = result; 
      })
      .catch(error => console.log(error));
  }
}

export class BrowserInfo {
  /* eslint-disable */
    constructor() {
    // Opera 8.0+
        this.isOpera =
          (!!window.opr && !!opr.addons) || //es
          !!window.opera ||
          navigator.userAgent.indexOf(' OPR/') >= 0;
        // Firefox 1.0+
        this.isFirefox = typeof InstallTrigger !== 'undefined';
        // Safari 3.0+ "[object HTMLElementConstructor]"
        this.isSafari =
          /constructor/i.test(window.HTMLElement) ||
          (function(p) {
            return p.toString() === '[object SafariRemoteNotification]';
          })(
            !window['safari'] ||
              (typeof safari !== 'undefined' && safari.pushNotification),
          );
        // Internet Explorer 6-11
        this.isIE = /*@cc_on!@*/ false || !!document.documentMode;
        // Edge 20+
        this.isEdge = !this.isIE && !!window.StyleMedia;
        // Chrome 1+
        this.isChrome = !!window.chrome && !!window.chrome.webstore;
    
        this.metaMaskSupport = this.isChrome || this.isFirefox || this.isOpera;
    }
    /* eslint-enable */
}
