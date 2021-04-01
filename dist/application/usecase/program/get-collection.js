"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GetCollection = /** @class */ (function () {
    function GetCollection(repository) {
        this.repository = repository;
    }
    GetCollection.prototype.invoke = function (request) {
        return this.repository.getCollection(request.offset(), request.limit());
    };
    return GetCollection;
}());
exports.default = GetCollection;
