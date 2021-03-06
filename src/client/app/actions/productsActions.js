import fetch from 'node-fetch';
import config from '../config';

const onGetProductsList = list => ({
    type: 'GET_PRODUCTS_LIST',
    payload: {list}
});

export const getProductsList = () => (
    async dispatch => {
        try {
            const response = await fetch(config.url + '/products');
            const list = (await response.json());
            return dispatch(onGetProductsList(list));
        } catch (error) {
            console.log(error);
        }
    }
);

const onGetProductDetails = details => ({
    type: 'GET_PRODUCT_DETAILS',
    payload: {details}
});

export const getProductDetails = id => (
    async dispatch => {
        try {
            const response = await fetch(config.url + '/products/' + id);
            const details = (await response.json());
            return dispatch(onGetProductDetails(details));
        } catch (error) {
            console.log(error);
        }
    }
);
