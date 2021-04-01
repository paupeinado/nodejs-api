"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProgramGetCollectionRequest = /** @class */ (function () {
    function ProgramGetCollectionRequest(dependencies) {
        this.dependencies = dependencies;
        if (Number.isNaN(this.dependencies.offset)) {
            throw new Error('Parameter offset must be a number');
        }
        if (Number.isNaN(this.dependencies.limit)) {
            throw new Error('Parameter limit must be a number');
        }
    }
    ProgramGetCollectionRequest.prototype.offset = function () {
        return this.dependencies.offset;
    };
    ProgramGetCollectionRequest.prototype.limit = function () {
        return this.dependencies.limit;
    };
    return ProgramGetCollectionRequest;
}());
exports.default = ProgramGetCollectionRequest;
