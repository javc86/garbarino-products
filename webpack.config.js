const dotenv = require('dotenv');

dotenv.config();

if (process.env.APP_ENV === 'dev') {
    const webpackConfDev = require('./webpack.dev.config');
    module.exports = webpackConfDev;
} else {
    const webpackConfProd = require('./webpack.prod.config');
    module.exports = webpackConfProd;
}
