import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import favicon from 'express-favicon';
import dotenv from 'dotenv';
import api from './routes';

dotenv.config();

const app = express();

if (process.env.APP_ENV.toUpperCase() === 'DEV') {
    const webpackConfig = require('../../webpack.dev.config');
    const webpack = require('webpack');
    const middleware = require('webpack-dev-middleware');

    app.use(middleware(webpack(webpackConfig)));
}

app.use(bodyParser.json());
app.use(express.static(path.resolve(
    __dirname,
    process.env.APP_ENV.toUpperCase() === 'DEV' ? '../../public' : '../public'
)));

app.use(favicon(path.resolve(
    __dirname,
    process.env.APP_ENV.toUpperCase() === 'DEV' ? '../../public/assets/favicon.ico' : '../public/assets/favicon.ico'
)));

app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, process.env.APP_ENV.toUpperCase() === 'DEV' ? '../../public/index.html' : '../public/index.html'));
});

app.get('/details/*', (req, res) => {
    res.sendFile(path.join(__dirname, process.env.APP_ENV.toUpperCase() === 'DEV' ? '../../public/index.html' : '../public/index.html'));
});

app.get('/notfound', (req, res) => {
    res.sendFile(path.join(__dirname, process.env.APP_ENV.toUpperCase() === 'DEV' ? '../../public/index.html' : '../public/index.html'));
});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, File-Format")
    res.header("Content-Type", "application/json")
    next();
});

app.use('/api', api);

app.listen((process.env.SERVER_PORT || 3000), () => {
    console.log('**************************************************');
    console.log('SERVIDOR CORRIENDO EN EL PUERTO ' + (process.env.SERVER_PORT || 3000));
    console.log('**************************************************');
});
