export default class AuthService {
    apiBaseURL = 'https://w65t9a9h3f.execute-api.us-east-1.amazonaws.com/latest/ethauths';

    checkToken(){
        return window.localStorage.getItem('session');
    }

    updateToken(token){
        return window.localStorage.setItem('session', token);
    }

    tokenAuth(userId, token) {
        return fetch(this.apiBaseURL + '/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId,
            token,
            type: 'application/json',
          }),
        })
        .then(res => res.json())
            .then(response => {
                this.updateToken(response);

                console.log('auth resp')
                console.log(response)
                return true;
            }).catch(err => {
                alert('error', err)
                return false;
            })
    }

    getMessage() {
        return fetch(this.apiBaseURL + '/message', {
          method: 'GET',
        })
        .then(function(response) {
            return response.json();
        })
    }

    signMessage(userId, signature) {

        console.log('in post')
        console.log(userId)
        console.log(signature)
        const data = JSON.stringify({
            userId,
            signature,
        });

        console.log(data)

        return fetch(this.apiBaseURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: data,
        })
        .then(res => res.json())
            .then(response => {
                console.log(response)
                this.updateToken(response);
                return response;
            }).catch(err => {
                console.log(err)
                alert('error', err)
                return false;
            })

    }

    checkDoloMembership(userId, token) {
        return fetch(this.apiBaseURL + '/ismember', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userId,
              token,
              type: 'application/json',
            })
          })
          .then(res => res.json())
            .then(response => {
                return true;
            }).catch(err => {
                alert('error', err)
                return false;
            })
    }
}