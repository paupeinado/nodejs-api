"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var program_route_1 = __importDefault(require("./program.route"));
var developer_route_1 = __importDefault(require("./developer.route"));
var routes = express_1.Router();
routes.use('/programs', program_route_1.default);
routes.use('/developers', developer_route_1.default);
exports.default = routes;
