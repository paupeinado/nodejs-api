"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProgramModelMongo = /** @class */ (function () {
    function ProgramModelMongo(document) {
        var program = document.toObject();
        this.id = program.id;
        this.developer_id = program.developer_id;
        this.title = program.title;
        this.version = program.version;
        this.url = program.url;
        this.short_description = program.short_description;
        this.license = program.license;
        this.thumbnail = program.thumbnail;
        this.rating = program.rating;
        this.total_downloads = program.total_downloads;
        this.compatible = program.compatible;
    }
    return ProgramModelMongo;
}());
exports.default = ProgramModelMongo;
