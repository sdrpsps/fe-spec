"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getESLintDefaultConfig = void 0;
var glob_1 = __importDefault(require("glob"));
function getESLintDefaultConfig(cwd, pkg) {
    var tsFiles = glob_1.default.sync('./!(node_modules)/**/*.@(ts|tsx)', { cwd: cwd });
    var reactFiles = glob_1.default.sync('./!(node_modules)/**/*.@(jsx|tsx)', { cwd: cwd });
    var vueFiles = glob_1.default.sync('./!(node_modules)/**/*.@(vue)', { cwd: cwd });
    var deps = Object.keys(pkg.dependencies || {});
    var language = tsFiles.length > 0 ? 'typescript' : '';
    var framework = '';
    if (reactFiles.length > 0 || deps.some(function (dep) { return dep.includes('react'); })) {
        framework = 'react';
    }
    else if (vueFiles.length > 0 || deps.some(function (dep) { return dep.includes('vue'); })) {
        framework = 'vue';
    }
    var frameworkPart = framework ? "/".concat(framework) : '';
    return "sunny-eslint-config/".concat(language).concat(frameworkPart);
}
exports.getESLintDefaultConfig = getESLintDefaultConfig;
