"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProgramGetRequest = /** @class */ (function () {
    function ProgramGetRequest(dependencies) {
        this.dependencies = dependencies;
        if (Number.isNaN(this.dependencies.programId)) {
            throw new Error('Invalid program ID. Must be a number');
        }
    }
    ProgramGetRequest.prototype.programId = function () {
        return this.dependencies.programId;
    };
    return ProgramGetRequest;
}());
exports.default = ProgramGetRequest;
