"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DeveloperGetRequest = /** @class */ (function () {
    function DeveloperGetRequest(dependencies) {
        this.dependencies = dependencies;
        if (Number.isNaN(this.dependencies.developerId)) {
            throw new Error('Invalid developer ID. Must be a number');
        }
    }
    DeveloperGetRequest.prototype.programId = function () {
        return this.dependencies.developerId;
    };
    return DeveloperGetRequest;
}());
exports.default = DeveloperGetRequest;
