const mongoose = require("mongoose");

const Downloader = require('../models/Downloader');

module.exports = {
    async index(req, res) {
        const downloaders = await Downloader.find();
        
        return res.json(downloaders);
    },

    async store(req, res) {
        const downloader = await Downloader.create(req.body);

        return res.json(downloader);
    },

    async destroy(req, res) {
        await Downloader.findByIdAndRemove(req.params.id);

        return res.json();
    }
}