"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROJECT_TYPES = exports.PACKAGE_VERSION = exports.PACKAGE_NAME = void 0;
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
        name: 'Rax 项目（JavaScript）',
        value: 'rax',
    },
    {
        name: 'Rax 项目（TypeScript）',
        value: 'typescript/rax',
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
    {
        name: '使用 ES5 及之前版本 JavaScript 的老项目',
        value: 'es5',
    },
];
