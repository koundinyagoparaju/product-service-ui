export function userCreationFailed(state = false, action) {
    if (action.type === 'USER_CREATION_FAILED') {
        return action.userCreationFailed;
    } else {
        return state;
    }
}
export function userCreated(state = -1, action) {
    if (action.type === 'USER_CREATED') {
        return action.userId;
    } else {
        return state;
    }
}
export function userLoginFailed(state = false, action) {
    if (action.type === 'USER_LOGIN_FAILED') {
        return action.userLoginFailed;
    } else {
        return state;
    }
}

export function userLoggedIn(state = -1, action) {
    if (action.type === 'USER_LOGGEDIN') {
        return action.userId;
    } else {
        return state;
    }
}
