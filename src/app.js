const express = require('express');
const cors = require('cors');
const { RoyaleAPI } = require('./routes/royale');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

RoyaleAPI(app);

module.exports.app = app;