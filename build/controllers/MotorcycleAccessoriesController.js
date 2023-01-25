"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const express_1 = require("express");
const RequestLogger_1 = __importDefault(require("../utilities/RequestLogger"));
const http_status_1 = __importDefault(require("http-status"));
const DebugUtilities_1 = require("../utilities/DebugUtilities");
const MotorcycleAccessoriesService_1 = require("../services/MotorcycleAccessoriesService");
const debug = (0, debug_1.default)('tc:MotorcycleAccessoriesController');
const MotorcycleAccessoriesController = (0, express_1.Router)();
MotorcycleAccessoriesController.get('/accessories/get-types-of-accessories', RequestLogger_1.default.basic, async (req, res) => {
    try {
        const response = await MotorcycleAccessoriesService_1.MotorcycleAccessoriesService.getTypeOfAccesories();
        res.status(http_status_1.default.OK).send(response);
    }
    catch (err) {
        const error = DebugUtilities_1.DebugUtilities.error(err, 'Error');
        debug('ERROR: GET-MotorcycleAccessoriesController: /accessories/get-types-of-accessories %j', error.statusError);
        res.status(error.codeStatusError).send(error.statusError);
    }
});
MotorcycleAccessoriesController.get('/accessories/get-accesories-brands-by-type/:accesoryType', RequestLogger_1.default.basic, async (req, res) => {
    try {
        const accesory = +req.params.accesoryType;
        const response = await MotorcycleAccessoriesService_1.MotorcycleAccessoriesService.getBrandsOfSparePartsByType(accesory);
        res.status(http_status_1.default.OK).send(response);
    }
    catch (err) {
        const error = DebugUtilities_1.DebugUtilities.error(err, 'Error');
        debug('ERROR: GET-MotorcycleAccessoriesController: /accessories/get-accesories-brands-by-type/:accesoryType %j', error.statusError);
        res.status(error.codeStatusError).send(error.statusError);
    }
});
exports.default = MotorcycleAccessoriesController;
//# sourceMappingURL=MotorcycleAccessoriesController.js.map