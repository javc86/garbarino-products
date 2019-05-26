import dotenv from 'dotenv';

dotenv.config();

export const database = {
    host: process.env.HOST,
    user: process.env.USER_DB,
    password: process.env.PASS,
    database: process.env.DATABASE,
    port: process.env.PORT
};

export const urlApi = 'http://garbarino-mock-api.s3-website-us-east-1.amazonaws.com';
