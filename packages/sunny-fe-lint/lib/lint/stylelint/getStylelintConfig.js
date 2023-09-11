"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStylelintConfig = void 0;
var fs_extra_1 = __importDefault(require("fs-extra"));
var glob_1 = __importDefault(require("glob"));
var path_1 = __importDefault(require("path"));
var constants_1 = require("../../utils/constants");
function getStylelintConfig(opts, pkg, config) {
    var cwd = opts.cwd, fix = opts.fix;
    if (config.enableStylelint === false)
        return {};
    var lintConfig = {
        fix: Boolean(fix),
        allowEmptyInput: true,
    };
    if (config.stylelintOptions) {
        Object.assign(lintConfig, config.stylelintOptions);
    }
    else {
        var lintConfigFiles = glob_1.default.sync('.stylelintrc?(.@(js|yaml|yml|json))', { cwd: cwd });
        if (lintConfigFiles.length === 0 && !pkg.stylelint) {
            lintConfig.config = {
                extends: 'encode-fe-stylelint-config',
            };
        }
        var ignoreFilePath = path_1.default.resolve(cwd, '.stylelintignore');
        if (!fs_extra_1.default.existsSync(ignoreFilePath)) {
            lintConfig.ignorePattern = constants_1.STYLELINT_IGNORE;
        }
    }
    return lintConfig;
}
exports.getStylelintConfig = getStylelintConfig;
