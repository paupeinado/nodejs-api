"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var route_1 = __importDefault(require("./application/route"));
var mongoose_1 = require("mongoose");
// Connect to mongo database
mongoose_1.connect((_a = process.env.DB_CONNECTION_URI) !== null && _a !== void 0 ? _a : '', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// Create Express server
var server = express_1.default();
// Parse JSON payloads 
server.use(express_1.default.json());
// Application routes
server.use(route_1.default);
server.listen(process.env.SERVER_PORT, function () {
    console.log('Server listening on port ' + process.env.SERVER_PORT);
});
