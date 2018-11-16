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
                if (!response.errorMessage) {
										this.updateToken(response);
										return true;
                } else {
                    console.log('error ' + response.errorMessage)
										return false;
                }
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
        const data = JSON.stringify({
            userId,
            signature,
        });

        return fetch(this.apiBaseURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: data,
        })
        .then(res => res.json())
            .then(response => {
                if (!response.errorMessage) {
                  this.updateToken(response);
									return true;
                } else {
									console.log('error ' + response.errorMessage)
									return false;
                }
            }).catch(err => {
                console.log(err)
                alert('error', err)
                return false;
            })

    }
}