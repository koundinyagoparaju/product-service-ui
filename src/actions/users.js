import { apiBaseUrl } from '../config';
export function createUser(user) {
    return (dispatch) => {
        fetch(`${apiBaseUrl}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(checkStatus)
            .then(parseJSON)
            .then(userId => dispatch({
                type: 'USER_CREATED',
                userId
            })).catch(error => dispatch({
            type: 'USER_CREATION_FAILED',
            userCreationFailed: true
        }));
    }
}

export function loginUser(email, password) {
    return (dispatch) => {
        fetch(`${apiBaseUrl}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then(checkStatus)
            .then(parseJSON)
            .then(userId => dispatch({
                type: 'USER_LOGGEDIN',
                userId
            })).catch(error => dispatch({
            type: 'USER_LOGIN_FAILED',
            userLoginFailed: true
        }));
    }
}



function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error
    }
}

function parseJSON(response) {
    return response.json();
}
