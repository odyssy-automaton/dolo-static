export default class AuthService {
    apiBaseURL = 'https://w65t9a9h3f.execute-api.us-east-1.amazonaws.com/latest/ethauths';

    checkToken(){
        return window.localStorage.getItem('session');
    }

    updateToken(token){
        return window.localStorage.setItem('session', token);
    }

    tokenAuth(userid, token) {

        return fetch(this.apiBaseURL + '/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userid,
            token,
            type: 'application/json',
          }),
        })
        .then(function(response) {
            this.updateToken(response);
            return true;
        }).catch(function(err) {
            alert('error', err)
            return false;
        })

    }

    getMessage() {

        return fetch(this.apiBaseURL + '/message', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(function(response) {
            return response;
        })

    }

    signMessage(userid, signature) {

        return fetch(this.apiBaseURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userid,
            signature,
            type: 'application/json',
          })
        })
        .then(function(response) {
            this.updateToken(response);
            return true;
        }).catch(function(err) {
            alert('error', err)
            return false;
        })

    }

    checkDoloMembership(userid, token) {
        return fetch(this.apiBaseURL + '/ismember', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userid,
              token,
              type: 'application/json',
            })
          })
          .then(function(response) {
              alert('is member?', response)
              return true;
          }).catch(function(err) {
              alert('error', err)
              return false;
          })
    }

}