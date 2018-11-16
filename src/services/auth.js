export default class AuthService {
    apiBaseURL = 'https://w65t9a9h3f.execute-api.us-east-1.amazonaws.com/latest/ethauths';

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
            return response.json();
        })

    }

    signMessage(userid, token) {

        return fetch(this.apiBaseURL + '/message', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(function(response) {
            return response.json();
        })

    }

}