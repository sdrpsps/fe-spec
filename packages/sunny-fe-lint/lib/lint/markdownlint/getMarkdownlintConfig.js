"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMarkdownlintConfig = void 0;
var path_1 = __importDefault(require("path"));
var glob_1 = __importDefault(require("glob"));
var markdownlint_1 = __importDefault(require("markdownlint"));
var sunny_markdownlint_config_1 = __importDefault(require("sunny-markdownlint-config"));
function getMarkdownlintConfig(opts, pkg, config) {
    var cwd = opts.cwd;
    var lintConfig = {
        fix: Boolean(opts.fix),
        resultVersion: 3,
    };
    if (config.markdownlintOptions) {
        Object.assign(lintConfig, config.markdownlintOptions);
    }
    else {
        var lintConfigFiles = glob_1.default.sync('.markdownlint(.@(yaml|yml|json))', { cwd: cwd });
        if (lintConfigFiles.length === 0) {
            lintConfig.config = sunny_markdownlint_config_1.default;
        }
        else {
            lintConfig.config = markdownlint_1.default.readConfigSync(path_1.default.resolve(cwd, lintConfigFiles[0]));
        }
    }
    return lintConfig;
}
exports.getMarkdownlintConfig = getMarkdownlintConfig;
