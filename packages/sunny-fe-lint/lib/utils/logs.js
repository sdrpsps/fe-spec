"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var green = chalk_1.default.green, blue = chalk_1.default.blue, yellow = chalk_1.default.yellow, red = chalk_1.default.red;
exports.default = {
    success: function (msg) {
        console.log(green(msg));
    },
    info: function (msg) {
        console.log(blue(msg));
    },
    warn: function (msg) {
        console.log(yellow(msg));
    },
    error: function (msg) {
        console.log(red(msg));
    },
    result: function (msg, isPass) {
        console.info(isPass ? green('✔') : red('✘'), blue(msg));
    },
};
