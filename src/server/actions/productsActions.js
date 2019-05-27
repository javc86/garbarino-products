import mysql from 'mysql';
import http from 'request';
import {database, urlApi} from '../config';

const productsActions = {};

productsActions.list = () => (
    new Promise((resolve, reject) => {
        const options = {
            url: urlApi + '/products',
            headers: {
                'Accept': 'application/json'
            }
        };

        http.get(options, function (error, response, data) {
            var list = JSON.parse(data);
            resolve(JSON.stringify(list));
        });
    })
);

productsActions.details = id => (
    new Promise((resolve, reject) => {
        const options = {
            url: urlApi + '/products/' + id,
            headers: {
                'Accept': 'application/json'
            }
        };

        http.get(options, function (error, response, data) {
            var details = JSON.parse(data);
            resolve(JSON.stringify(details));
        });
    })
);

export default productsActions;
