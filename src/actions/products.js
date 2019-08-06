import { apiBaseUrl } from '../config';

export function createProduct(product, userId) {
    return (dispatch) => {
        fetch(`${apiBaseUrl}/products?userId=${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        }).then(checkStatus)
            .then(parseJSON)
            .then(productId => dispatch({
                type: 'PRODUCT_CREATED',
                productId
            })).catch(error => dispatch({
            type: 'PRODUCT_CREATION_FAILED',
            productCreationFailed: true
        }));
    }
}

export function getAllProducts() {
    return (dispatch) => {
        fetch(`${apiBaseUrl}/products`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(checkStatus)
            .then(parseJSON)
            .then(products => dispatch({
                type: 'GET_ALL_PRODUCTS',
                products
            })).catch(error => dispatch({
            type: 'GET_ALL_PRODUCTS_FAILED',
            getAllProductsFailed: true
        }));
    }
}

export function updateProduct(product, userId) {
    return (dispatch) => {
        fetch(`${apiBaseUrl}/products/${product.id}?userId=${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        }).then(checkStatus)
            .then(parseJSON)
            .then(productId => dispatch({
                type: 'PRODUCT_UPDATED',
                productId
            })).catch(error => dispatch({
            type: 'PRODUCT_UPDATION_FAILED',
            productUpdationFailed: true
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
