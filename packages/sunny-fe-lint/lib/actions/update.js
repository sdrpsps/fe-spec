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
var constants_1 = require("../utils/constants");
var child_process_1 = require("child_process");
var npmType_1 = __importDefault(require("../utils/npmType"));
var logs_1 = __importDefault(require("../utils/logs"));
var ora_1 = __importDefault(require("ora"));
var getLatestVersion = function () { return __awaiter(void 0, void 0, void 0, function () {
    var npm, latestVersion;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, npmType_1.default];
            case 1:
                npm = _a.sent();
                latestVersion = (0, child_process_1.execSync)("".concat(npm, " view ").concat(constants_1.PACKAGE_NAME, " version")).toString('utf-8').trim();
                if (latestVersion === constants_1.PACKAGE_VERSION) {
                    logs_1.default.info("\u5F53\u524D\u5DF2\u662F\u6700\u65B0\u7248\u672C\uFF1A".concat(constants_1.PACKAGE_VERSION));
                    return [2, null];
                }
                else {
                    return [2, compareVersion(latestVersion)];
                }
                return [2];
        }
    });
}); };
var compareVersion = function (latestVersion) {
    var latestVersionArr = latestVersion.split('.').map(Number);
    var currentVersionArr = constants_1.PACKAGE_VERSION.split('.').map(Number);
    for (var i = 0; i < latestVersionArr.length; i++) {
        if (latestVersionArr[i] > currentVersionArr[i]) {
            return latestVersion;
        }
        else if (latestVersionArr[i] < currentVersionArr[i]) {
            return null;
        }
    }
};
exports.default = (function (install) {
    if (install === void 0) { install = true; }
    return __awaiter(void 0, void 0, void 0, function () {
        var checking, latestVersion, updateMsg, _a, _b, _c, e_1;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    checking = (0, ora_1.default)('检查最新版本中...');
                    checking.start();
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 7, , 8]);
                    return [4, getLatestVersion()];
                case 2:
                    latestVersion = _d.sent();
                    checking.stop();
                    if (!(latestVersion && install)) return [3, 3];
                    updateMsg = (0, ora_1.default)("".concat(constants_1.PACKAGE_NAME, " \u5B58\u5728\u65B0\u7248\u672C\uFF0C\u5C06\u5347\u7EA7\u81F3\u6700\u65B0\u7248\u672C\uFF1A").concat(latestVersion));
                    updateMsg.start();
                    (0, child_process_1.execSync)("".concat(npmType_1.default, " install ").concat(constants_1.PACKAGE_NAME, " -g"));
                    updateMsg.stop();
                    return [3, 6];
                case 3:
                    if (!latestVersion) return [3, 5];
                    logs_1.default.warn("".concat(constants_1.PACKAGE_NAME, " \u5B58\u5728\u65B0\u7248\u672C\uFF0C\u5EFA\u8BAE\u5347\u7EA7\u81F3\u6700\u65B0\u7248\u672C\uFF1A").concat(latestVersion));
                    _b = (_a = logs_1.default).warn;
                    _c = "\u53EF\u4EE5\u6267\u884C ".concat;
                    return [4, npmType_1.default];
                case 4:
                    _b.apply(_a, [_c.apply("\u53EF\u4EE5\u6267\u884C ", [_d.sent(), " install "]).concat(constants_1.PACKAGE_NAME, " -g \u6765\u5B89\u88C5\u6700\u65B0\u7248\u672C")]);
                    return [3, 6];
                case 5:
                    if (install) {
                        logs_1.default.info("\u5F53\u524D\u5DF2\u662F\u6700\u65B0\u7248\u672C");
                    }
                    _d.label = 6;
                case 6: return [3, 8];
                case 7:
                    e_1 = _d.sent();
                    checking.stop();
                    logs_1.default.error(e_1);
                    return [3, 8];
                case 8: return [2];
            }
        });
    });
});
