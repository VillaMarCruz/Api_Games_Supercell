"use strict";
const debug = require("debug")("app:controladorUsuario");
const { ClashRoyaleAPI } = require('@varandas/clash-royale-api');

const CreateError = require("http-errors");

const { Config } = require("../config/index");
const { Response } = require("../common/response");

const getCards = async (req, res) => {
    try {
        const api = new ClashRoyaleAPI(Config.tokenRoyale);
        const cards = await api.getCards();
        Response.success(res, 200, 'Cards', cards)
    } catch (error) {
        Response.error(res);
    }
};

module.exports = {
    getCards,
};
