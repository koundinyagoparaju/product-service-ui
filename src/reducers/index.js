import { combineReducers } from 'redux';
import { userCreated, userCreationFailed, userLoggedIn, userLoginFailed } from './users';
export default combineReducers({
    userLoggedIn,
    userLoginFailed,
    userCreationFailed,
    userCreated
});
