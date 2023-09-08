#!/usr/bin/env node
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
var commander_1 = require("commander");
var constants_1 = require("./utils/constants");
var path_1 = __importDefault(require("path"));
var init_1 = __importDefault(require("./actions/init"));
var cwd = process.cwd();
commander_1.program
    .version(constants_1.PACKAGE_VERSION)
    .description("".concat(constants_1.PACKAGE_NAME, " \u662F Sunny \u524D\u7AEF\u7F16\u7801\u89C4\u8303\u5DE5\u7A0B\u5316 \u7684\u914D\u5957 Lint \u5DE5\u5177\uFF0C\u63D0\u4F9B\u7B80\u5355\u7684 CLI \u548C Node.js API\uFF0C\u8BA9\u9879\u76EE\u80FD\u591F\u4E00\u952E\u63A5\u5165\u3001\u4E00\u952E\u626B\u63CF\u3001\u4E00\u952E\u4FEE\u590D\u3001\u4E00\u952E\u5347\u7EA7\uFF0C\u5E76\u4E3A\u9879\u76EE\u914D\u7F6E git commit \u5361\u70B9\uFF0C\u964D\u4F4E\u9879\u76EE\u5B9E\u65BD\u89C4\u8303\u7684\u6210\u672C"));
commander_1.program
    .command('init')
    .description('一键接入：为项目初始化规范工具和配置，可以根据项目类型和需求进行定制')
    .option('--vscode', '写入.vscode/setting.json配置，请初始化一次后再执行')
    .action(function (cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var configPath;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!cmd.vscode) return [3, 1];
                configPath = path_1.default.resolve(cwd, "".concat(constants_1.PACKAGE_NAME, ".config.js"));
                return [3, 3];
            case 1: return [4, (0, init_1.default)({ cwd: cwd, checkVersionUpdate: true })];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3: return [2];
        }
    });
}); });
commander_1.program
    .command('scan')
    .description('一键扫描：扫描项目中的规范问题')
    .option('-q, --quiet', '仅报告错误信息 - 默认: false')
    .option('-o, --output-report', '输出扫描出的规范问题日志')
    .option('-i, --include <dirpath>', '指定要进行规范扫描的目录')
    .option('--no-ignore', '忽略 eslint 的 ignore 配置文件和 ignore 规则');
commander_1.program
    .command('commit-msg-scan')
    .description('commit message 检查: git commit 时对 commit message 进行检查');
commander_1.program
    .command('commit-file-scan')
    .description('代码提交检查: git commit 时对提交代码进行规范问题扫描');
commander_1.program
    .command('update')
    .description("\u66F4\u65B0 ".concat(constants_1.PACKAGE_NAME, " \u81F3\u6700\u65B0\u7248\u672C"))
    .action(function () { });
commander_1.program.parse(process.argv);
