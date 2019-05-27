import mysql from 'mysql';
import http from 'request';
import {database, urlApi} from '../config';

const productsActions = {};

productsActions.list = () => (
    new Promise((resolve, reject) => {
        const cn = mysql.createConnection(database);
        cn.connect();

        const query = 'SELECT product_id FROM blacklist';

        cn.query(query, (err, rows, fields) => {
            if (err) {
                const errorJson = JSON.parse(JSON.stringify(err));
                resolve(JSON.stringify({error: errorJson.sqlMessage}));
                cn.end();
            } else {
                const options = {
                    url: urlApi + '/products',
                    headers: {
                        'Accept': 'application/json'
                    }
                };

                http.get(options, function (error, response, data) {
                    const list = JSON.parse(data);
                    const newList = list.items.map(item => {
                        if (rows.length > 0 && rows.filter(a => a.product_id === item.id).length > 0) {
                            item.enabled = false;
                        } else {
                            item.enabled = true;
                        }

                        return item;
                    });
                    resolve(JSON.stringify(newList));
                });
                cn.end();
            }
        });
    })
);

productsActions.details = id => (
    new Promise((resolve, reject) => {
        const cn = mysql.createConnection(database);
        cn.connect();

        const query = `SELECT product_id FROM blacklist WHERE product_id = '${id}'`;

        cn.query(query, (err, rows, fields) => {
            if (err) {
                const errorJson = JSON.parse(JSON.stringify(err));
                resolve(JSON.stringify({error: errorJson.sqlMessage}));
                cn.end();
            } else {
                const options = {
                    url: urlApi + '/products/' + id,
                    headers: {
                        'Accept': 'application/json'
                    }
                };

                http.get(options, function (error, response, data) {
                    var details = JSON.parse(data);
                    if (rows.length > 0) {
                        details.enabled = false;
                    } else {
                        details.enabled = true;
                    }
                    resolve(JSON.stringify(details));
                });
                cn.end();
            }
        });
    })
);

productsActions.save = (id, enabled) => (
    new Promise((resolve, reject) => {
        const cn = mysql.createConnection(database);
        cn.connect();

        let query = `DELETE FROM blacklist WHERE product_id = '${id}'`;
        let msn = 'Producto borrado de la lista negra con exito';

        if (enabled) {
            query = `INSERT INTO blacklist (product_id) VALUES ('${id}')`;
            msn = 'Producto agregado a la lista negra con exito';
        }

        cn.query(query, (err, rows, fields) => {
            if (err) {
                const errorJson = JSON.parse(JSON.stringify(err));
                resolve(JSON.stringify({error: errorJson.sqlMessage}));
                cn.end();
            } else {
                resolve(JSON.stringify({msn}));
                cn.end();
            }
        });
    })
);

export default productsActions;
