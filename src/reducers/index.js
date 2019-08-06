import { combineReducers } from 'redux';
import { userCreated, userCreationFailed, userLoggedIn, userLoginFailed } from './users';
import {productUpdationFailed, productCreationFailed, getAllProductsFailed, getAllProducts, productCreated, productUpdated} from './products';
export default combineReducers({
    userLoggedIn,
    userLoginFailed,
    userCreationFailed,
    userCreated,
    productUpdationFailed,
    productCreationFailed,
    getAllProductsFailed,
    getAllProducts,
    productCreated,
    productUpdated
});
