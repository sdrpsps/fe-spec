"use strict";
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
exports.doESLint = void 0;
var constants_1 = require("../../utils/constants");
var path_1 = require("path");
var fast_glob_1 = __importDefault(require("fast-glob"));
var getESLintConfig_1 = require("./getESLintConfig");
var eslint_1 = require("eslint");
var formatESLintResults_1 = require("./formatESLintResults");
function doESLint(options) {
    return __awaiter(this, void 0, void 0, function () {
        var files, pattern, eslint, reports;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    files = [];
                    if (!options.files) return [3, 1];
                    files = options.files.filter(function (file) {
                        return constants_1.ESLINT_EXT.includes((0, path_1.extname)(file));
                    });
                    return [3, 3];
                case 1:
                    pattern = (0, path_1.join)(options.include, "**/*.{".concat(constants_1.ESLINT_EXT.map(function (ext) { return ext.replace(/^\./, ''); }).join(','), "}"));
                    return [4, (0, fast_glob_1.default)(pattern, {
                            cwd: options.cwd,
                            ignore: constants_1.ESLINT_IGNORE,
                        })];
                case 2:
                    files = _a.sent();
                    _a.label = 3;
                case 3:
                    eslint = new eslint_1.ESLint((0, getESLintConfig_1.getESLintConfig)(options, options.pkg, options.config));
                    return [4, eslint.lintFiles(files)];
                case 4:
                    reports = _a.sent();
                    if (!options.fix) return [3, 6];
                    return [4, eslint_1.ESLint.outputFixes(reports)];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6: return [2, (0, formatESLintResults_1.formatESLintResults)(reports, options.quiet, eslint)];
            }
        });
    });
}
exports.doESLint = doESLint;
