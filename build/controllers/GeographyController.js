"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DebugUtilities_1 = require("../utilities/DebugUtilities");
const GeographyService_1 = require("../services/GeographyService");
const http_status_1 = __importDefault(require("http-status"));
const RequestLogger_1 = __importDefault(require("../utilities/RequestLogger"));
const debug_1 = __importDefault(require("debug"));
const debug = (0, debug_1.default)('tc:GeographyController');
const GeographyController = (0, express_1.Router)();


GeographyController.get('/geographyc/get-search-range/:idBuyer', RequestLogger_1.default.basic, async (req, res) => {
    try {
        const idBuyer = +req.params.idBuyer;
        console.log('idComprador', idBuyer);
        const response = await GeographyService_1.GeographyService.getRangeByUser(idBuyer);
        res.status(http_status_1.default.OK).send(response);
        console.log('Nadies');
    }
    catch (err) {
        const error = DebugUtilities_1.DebugUtilities.error(err, 'Error');
        debug('ERROR: POST-SparePartsController: %j', error.statusError);
        res.status(error.codeStatusError).send(error.statusError);
    }
});
GeographyController.get('/geography/overwriterange', RequestLogger_1.default.basic, async (req, res) => {
    try {
        const response = await GeographyService_1.GeographyService.getOverwriteRange();
        res.status(http_status_1.default.OK).send(response);
    }
    catch (err) {
        const error = DebugUtilities_1.DebugUtilities.error(err, 'Error');
        debug('ERROR: POST-ProductsController: %j', error.statusError);
        res.status(error.codeStatusError).send(error.statusError);
    }
});
exports.default = GeographyController;
//# sourceMappingURL=GeographyController.js.map