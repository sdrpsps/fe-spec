import fs from 'fs-extra';
import path from 'path';

// 读取 package.json 的配置
const PACKAGE_JSON_CONFIG: Record<string, any> = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../package.json'), 'utf-8'),
);

// 包名
export const PACKAGE_NAME = PACKAGE_JSON_CONFIG.name;

// 包版本号
export const PACKAGE_VERSION = PACKAGE_JSON_CONFIG.version;

// 项目类型
export const PROJECT_TYPES: Array<{ name: string; value: string }> = [
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
    name: 'Vue2 项目（JavaScript）',
    value: 'vue2',
  },
  {
    name: 'Vue3 项目（JavaScript）',
    value: 'vue3',
  },
  {
    name: 'Vue3 项目（TypeScript）',
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

// ESLint 扫描时忽略的文件或目录
export const ESLINT_IGNORE: string[] = [
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

// ESLint 扫描的文件后缀名
export const ESLINT_EXT: string[] = ['.js', '.jsx', '.ts', '.tsx', '.vue'];

// StyleLint 扫描的文件后缀名
export const STYLELINT_EXT: string[] = ['.css', '.less', '.scss', '.sass'];

// StyleLint 扫描时忽略的文件或目录
export const STYLELINT_IGNORE: string[] = [
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

// MarkdownLint 扫描的文件后缀名
export const MARKDOWNLINT_EXT: string[] = ['.md'];

// MarkdownLint 扫描时忽略的文件或目录
export const MARKDOWNLINT_IGNORE: string[] = [
  'node_modules/',
  'dist/',
  'build/',
  'coverage/',
  'es/',
  'lib/',
];

// Prettier 扫描的文件后缀名
export const PRETTIER_EXT: string[] = [...ESLINT_EXT, ...STYLELINT_EXT, ...MARKDOWNLINT_EXT];

// Prettier 扫描时忽略的文件或目录
export const PRETTIER_IGNORE: string[] = [
  'node_modules/',
  'dist/',
  'build/',
  'coverage/',
  'es/',
  'lib/',
];
