"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("module-alias/register");
const express = require("express");
const bodyParser = require("body-parser");
const typedi_1 = require("typedi");
const config_1 = require("../app/config/config");
const logger_1 = require("../libs/logs/logger");
const routing_controllers_1 = require("routing-controllers");
const http = require("http");
const baseDir = __dirname;
const expressApp = express();
// Handling the DependencyInjection across the entire application
(0, routing_controllers_1.useContainer)(typedi_1.default);
// Loads all the Controllers from the directories and provides the routing facility
(0, routing_controllers_1.useExpressServer)(expressApp, {
    routePrefix: config_1.ENV_CONFIG.app.apiRoot,
    defaultErrorHandler: false,
    controllers: [baseDir + `/**/controllers/*{.js,.ts}`]
});
expressApp.use(bodyParser.urlencoded({ extended: false }));
expressApp.use(bodyParser.json());
const server = http.createServer(expressApp);
server.listen(config_1.ENV_CONFIG.app.port, () => {
    logger_1.Logger.info('Server', 'Application running on', `${config_1.ENV_CONFIG.app.hostname}:${config_1.ENV_CONFIG.app.port}`);
});
// Handling the unHandledRejection errors
process.on('unhandledRejection', (error, promise) => {
    logger_1.Logger.error('Server', 'unhandledRejectionError :', `${error}`);
});
//# sourceMappingURL=app.js.map