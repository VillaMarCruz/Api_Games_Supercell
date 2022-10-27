const express = require('express');
const router = express.Router();

const RoyaleController = require('../controllers/royale')

module.exports.RoyaleAPI = (app) => {
    router
        .get('/cards', RoyaleController.getCards);
    app.use('/api/royale', router)
}