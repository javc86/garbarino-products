import express from 'express';
import productsActions from '../actions/productsActions';

const api = express.Router();

api.get('/products', async (req, res) => {
    try {
        const response = await productsActions.list();
        res.send(JSON.parse(response));
    } catch (error) {
        res.send({error: error});
    }
});

api.get('/products/:id', async (req, res) => {
    try {
        const response = await productsActions.details(req.params.id);
        res.send(JSON.parse(response));
    } catch (error) {
        res.send({error: error});
    }
});

export default api;
