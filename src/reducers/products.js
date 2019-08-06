export function productCreationFailed(state = false, action) {
    if (action.type === 'PRODUCT_CREATION_FAILED') {
        return action.productCreationFailed;
    } else {
        return state;
    }
}
export function productCreated(state = -1, action) {
    if (action.type === 'PRODUCT_CREATED') {
        return action.productId;
    } else {
        return state;
    }
}
export function getAllProducts(state = [], action) {
    if (action.type === 'GET_ALL_PRODUCTS') {
        return action.products;
    } else {
        return state;
    }
}

export function getAllProductsFailed(state = false, action) {
    if (action.type === 'GET_ALL_PRODUCTS_FAILED') {
        return action.getAllProductsFailed;
    } else {
        return state;
    }
}

export function productUpdated(state = -1, action) {
    if (action.type === 'PRODUCT_UPDATED') {
        return action.productId;
    } else {
        return state;
    }
}

export function productUpdationFailed(state = false, action) {
    if (action.type === 'PRODUCT_UPDATION_FAILED') {
        return action.productUpdationFailed;
    } else {
        return state;
    }
}
