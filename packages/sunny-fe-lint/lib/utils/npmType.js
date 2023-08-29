"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var command_exists_1 = require("command-exists");
var npmType = new Promise(function (resolve) {
    if ((0, command_exists_1.sync)('pnpm')) {
        resolve('pnpm');
    }
    else {
        resolve('npm');
    }
});
exports.default = npmType;
