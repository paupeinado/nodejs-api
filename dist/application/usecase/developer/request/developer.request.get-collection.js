"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DeveloperGetCollectionRequest = /** @class */ (function () {
    function DeveloperGetCollectionRequest(dependencies) {
        this.dependencies = dependencies;
        if (Number.isNaN(this.dependencies.offset)) {
            throw new Error('Parameter offset must be a number');
        }
        if (Number.isNaN(this.dependencies.limit)) {
            throw new Error('Parameter limit must be a number');
        }
    }
    DeveloperGetCollectionRequest.prototype.offset = function () {
        return this.dependencies.offset;
    };
    DeveloperGetCollectionRequest.prototype.limit = function () {
        return this.dependencies.limit;
    };
    return DeveloperGetCollectionRequest;
}());
exports.default = DeveloperGetCollectionRequest;
