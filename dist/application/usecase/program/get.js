"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Get = /** @class */ (function () {
    function Get(repository) {
        this.repository = repository;
    }
    Get.prototype.invoke = function (request) {
        return this.repository.getOne(request.programId());
    };
    return Get;
}());
exports.default = Get;
