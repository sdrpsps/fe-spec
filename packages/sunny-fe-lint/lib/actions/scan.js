"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var constants_1 = require("../utils/constants");
var lint_1 = require("../lint");
var lint_2 = require("../lint");
exports.default = (function (options) { return __awaiter(void 0, void 0, void 0, function () {
    var cwd, fix, outputReport, scanConfig, readConfigFile, pkg, config, runErrors, results, eslintResults, e_1, stylelintResults, e_2, markdownlintResults, reportPath;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                cwd = options.cwd, fix = options.fix, outputReport = options.outputReport, scanConfig = options.config;
                readConfigFile = function (pth) {
                    var localPath = path_1.default.resolve(cwd, pth);
                    return fs_extra_1.default.existsSync(localPath) ? require(localPath) : {};
                };
                pkg = readConfigFile('package.json');
                config = scanConfig || readConfigFile("".concat(constants_1.PACKAGE_NAME, ".config.js"));
                runErrors = [];
                results = [];
                if (!(fix && config.enablePrettier !== false)) return [3, 2];
                return [4, (0, lint_1.doPrettier)(options)];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                if (!(fix && config.enableESLint !== false)) return [3, 6];
                _a.label = 3;
            case 3:
                _a.trys.push([3, 5, , 6]);
                return [4, (0, lint_2.doESLint)(__assign(__assign({}, options), { pkg: pkg, config: config }))];
            case 4:
                eslintResults = _a.sent();
                results = results.concat(eslintResults);
                return [3, 6];
            case 5:
                e_1 = _a.sent();
                runErrors.push(e_1);
                return [3, 6];
            case 6:
                if (!(fix && config.enableStylelint !== false)) return [3, 10];
                _a.label = 7;
            case 7:
                _a.trys.push([7, 9, , 10]);
                return [4, (0, lint_1.doStylelint)(__assign(__assign({}, options), { pkg: pkg, config: config }))];
            case 8:
                stylelintResults = _a.sent();
                results = results.concat(stylelintResults);
                return [3, 10];
            case 9:
                e_2 = _a.sent();
                runErrors.push(e_2);
                return [3, 10];
            case 10:
                if (!(fix && config.enableMarkdownlint !== false)) return [3, 12];
                return [4, (0, lint_1.doMarkdownlint)(__assign(__assign({}, options), { pkg: pkg, config: config }))];
            case 11:
                markdownlintResults = _a.sent();
                results = results.concat(markdownlintResults);
                try {
                }
                catch (e) {
                    runErrors.push(e);
                }
                _a.label = 12;
            case 12:
                if (outputReport) {
                    reportPath = path_1.default.resolve(process.cwd(), "./".concat(constants_1.PACKAGE_NAME, "-report.json"));
                    fs_extra_1.default.outputFile(reportPath, JSON.stringify(results, null, 2), function () { });
                }
                return [2, {
                        results: results,
                        errorCount: results.reduce(function (count, _a) {
                            var errorCount = _a.errorCount;
                            return count + errorCount;
                        }, 0),
                        warningCount: results.reduce(function (count, _a) {
                            var warningCount = _a.warningCount;
                            return count + warningCount;
                        }, 0),
                        runErrors: runErrors,
                    }];
        }
    });
}); });
