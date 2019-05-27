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

api.patch('/products/:id', async (req, res) => {
    try {
        let save = true;
        console.log(req.params);
        console.log(req.body);

        if(req.body.enabled === undefined) {
            res.send({error: 'Debe asignar el atributo \'enabled\' con true o false'});
            save = false;
        }

        if (save) {
            const response = await productsActions.save(req.params.id, req.body.enabled);
            res.send(JSON.parse(response));
        }
    } catch (error) {
        res.send({error: error});
    }
});

export default api;
