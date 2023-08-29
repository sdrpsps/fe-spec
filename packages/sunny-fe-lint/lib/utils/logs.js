"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var green = chalk_1.default.green, blue = chalk_1.default.blue, yellow = chalk_1.default.yellow, red = chalk_1.default.red;
exports.default = {
    success: function (msg) {
        console.log("\u2728  ".concat(green(msg)));
    },
    info: function (msg) {
        console.log("\uD83D\uDE80 ".concat(blue(msg)));
    },
    warn: function (msg) {
        console.log("\u26A0\uFE0F  ".concat(yellow(msg)));
    },
    error: function (msg) {
        console.log("\u274C  ".concat(red(msg)));
    },
    result: function (msg, isPass) {
        console.info("".concat(isPass ? green('✔') : red('✘'), " ").concat(blue(msg)));
    },
};
