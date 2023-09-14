"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRETTIER_IGNORE = exports.PRETTIER_EXT = exports.MARKDOWNLINT_IGNORE = exports.MARKDOWNLINT_EXT = exports.STYLELINT_IGNORE = exports.STYLELINT_EXT = exports.ESLINT_EXT = exports.ESLINT_IGNORE = exports.PROJECT_TYPES = exports.PACKAGE_VERSION = exports.PACKAGE_NAME = void 0;
var fs_extra_1 = __importDefault(require("fs-extra"));
var path_1 = __importDefault(require("path"));
var PACKAGE_JSON_CONFIG = JSON.parse(fs_extra_1.default.readFileSync(path_1.default.join(__dirname, '../../package.json'), 'utf-8'));
exports.PACKAGE_NAME = PACKAGE_JSON_CONFIG.name;
exports.PACKAGE_VERSION = PACKAGE_JSON_CONFIG.version;
exports.PROJECT_TYPES = [
    {
        name: '未使用 React、Vue、Node.js 的项目（JavaScript）',
        value: 'index',
    },
    {
        name: '未使用 React、Vue、Node.js 的项目（TypeScript）',
        value: 'typescript',
    },
    {
        name: 'React 项目（JavaScript）',
        value: 'react',
    },
    {
        name: 'React 项目（TypeScript）',
        value: 'typescript/react',
    },
    {
        name: 'Vue 项目（JavaScript）',
        value: 'vue',
    },
    {
        name: 'Vue 项目（TypeScript）',
        value: 'typescript/vue',
    },
    {
        name: 'Node.js 项目（JavaScript）',
        value: 'node',
    },
    {
        name: 'Node.js 项目（TypeScript）',
        value: 'typescript/node',
    },
];
exports.ESLINT_IGNORE = [
    'node_modules/',
    'dist/',
    'build/',
    'coverage/',
    'es/',
    'lib/',
    '**/*.min.js',
    '**/*-min.js',
    '**/*.bundle.js',
];
exports.ESLINT_EXT = ['.js', '.jsx', '.ts', '.tsx', '.vue'];
exports.STYLELINT_EXT = ['.css', '.less', '.scss', '.sass'];
exports.STYLELINT_IGNORE = [
    'node_modules/',
    'dist/',
    'build/',
    'coverage/',
    'es/',
    'lib/',
    '**/*.min.js',
    '**/*-min.js',
    '**/*.bundle.js',
];
exports.MARKDOWNLINT_EXT = ['.md'];
exports.MARKDOWNLINT_IGNORE = [
    'node_modules/',
    'dist/',
    'build/',
    'coverage/',
    'es/',
    'lib/',
];
exports.PRETTIER_EXT = __spreadArray(__spreadArray(__spreadArray([], __read(exports.ESLINT_EXT), false), __read(exports.STYLELINT_EXT), false), __read(exports.MARKDOWNLINT_EXT), false);
exports.PRETTIER_IGNORE = [
    'node_modules/',
    'dist/',
    'build/',
    'coverage/',
    'es/',
    'lib/',
];
