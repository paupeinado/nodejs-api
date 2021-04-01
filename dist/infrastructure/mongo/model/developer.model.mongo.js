"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DeveloperModelMongo = /** @class */ (function () {
    function DeveloperModelMongo(document) {
        var developer = document.toObject();
        this.id = developer.id;
        this.name = developer.name;
        this.url = developer.url;
    }
    return DeveloperModelMongo;
}());
exports.default = DeveloperModelMongo;
