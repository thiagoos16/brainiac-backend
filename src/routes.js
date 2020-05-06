const express = require('express');
const routes = express.Router();
const DownloaderController = require('./controllers/DownloadersController');

routes.get("/downloaders", DownloaderController.index);
routes.post("/downloaders", DownloaderController.store);
routes.delete("/downloaders/:id", DownloaderController.destroy);

module.exports = routes;