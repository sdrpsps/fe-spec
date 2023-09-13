import path from 'path';
import inquirer from 'inquirer';
import logs from '../utils/logs';
import { PROJECT_TYPES } from '../utils/constants';
import { InitOptions, PKG } from '../types';
import checkUpdate from './update';
import fs from 'fs-extra';
import { execSync } from 'child_process';
import conflictResolve from '../utils/conflictResolve';
import generateTemplate from '../utils/generateTemplate';
import depsInstall from '../utils/depsInstall';

// 当前执行步骤
let step = 0;

// 选择项目语言和框架
const chooseESLintType = async (): Promise<string> => {
  const { type } = await inquirer.prompt({
    type: 'list',
    name: 'type',
    message: `${++step}. 请选择项目的语言（JS/TS）和框架（React/Vue）类型：`,
    choices: PROJECT_TYPES,
  });

  return type;
};

// 选择是否启用 StyleLint
const chooseEnableStyleLint = async (defaultValue: boolean): Promise<boolean> => {
  const { enable } = await inquirer.prompt({
    type: 'confirm',
    name: 'enable',
    message: `${++step}. 是否启用 StyleLint？（若没有样式文件则不需要）：`,
    default: defaultValue,
  });

  return enable;
};

// 选择是否启用 MarkDownLint
const chooseEnableMarkDownLint = async (): Promise<boolean> => {
  const { enable } = await inquirer.prompt({
    type: 'confirm',
    name: 'enable',
    message: `${++step}. 是否启用 MarkDownLint？（若没有 MarkDown 文件则不需要）：`,
    default: true,
  });

  return enable;
};

// 初始化函数
export default async (options: InitOptions) => {
  const checkVersionUpdate = options.checkVersionUpdate || true;
  const disableNpmInstall = options.disableNpmInstall || false;
  const config: Record<string, any> = {}; // 初始化配置对象
  const cwd = options.cwd || process.cwd(); // 获取当前执行命令的路径
  const pkgPath = path.resolve(cwd, 'package.json'); // 获取 package.json 的路径
  let pkg: PKG;
  const isTest = process.env.NODE_ENV === 'test';

  // 检查版本更新
  if (checkVersionUpdate) {
    await checkUpdate(false);
  }

  // 初始化 enableESLint，默认为 true
  if (typeof options.enableESLint === 'boolean') {
    config.enableESLint = options.enableESLint;
  } else {
    config.enableESLint = true;
  }

  // 初始化 eslintType
  // 查找传入的 options 是否有 eslintType，并且是否在 PROJECT_TYPES 中
  if (
    typeof options.eslintType === 'string' &&
    PROJECT_TYPES.find((type) => type.value === options.eslintType)
  ) {
    config.eslintType = options.eslintType;
  } else {
    config.eslintType = await chooseESLintType();
  }

  // 初始化 enableStyleLint，正则判断 eslintType 是否为 node，如果是则默认为 false，否则为 true
  if (typeof options.enableStylelint === 'boolean') {
    config.enableStylelint = options.enableStylelint;
  } else {
    config.enableStylelint = await chooseEnableStyleLint(!/node/.test(config.eslintType));
  }

  // 初始化 enableMarkDownLint
  if (typeof options.enableMarkdownlint === 'boolean') {
    config.enableMarkdownlint = options.enableMarkdownlint;
  } else {
    config.enableMarkdownlint = await chooseEnableMarkDownLint();
  }

  if (!isTest) {
    logs.info(`Step ${++step}. 检查并处理项目中可能存在的依赖和配置冲突`);
    pkg = await conflictResolve(cwd, options.rewriteConfig);
    logs.success(`Step ${step}. 已完成项目依赖和配置冲突检查处理`);
    if (!disableNpmInstall) {
      logs.info(`Step ${++step}. 安装依赖`);
      await depsInstall(config);
      logs.success(`Step ${step}. 安装依赖成功`);
    }
  }

  // 更新 package.json 的 scripts 字段
  logs.info(`Step ${++step}. 更新 package.json scripts`);
  pkg = fs.readJSONSync(pkgPath);

  if (!pkg.scripts) {
    pkg.scripts = {};
  }

  pkg.scripts[`prepare`] = `husky install`;
  pkg.scripts[`lint`] = `eslint --fix --ext .js,jsx,.ts,.tsx,.vue ./src`;
  pkg.scripts[`prettier`] = `prettier --write './src/**/*.{js,ts,jsx,tsx,vue,scss,css,json}'`;

  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
  logs.success(`Step ${step}. 更新 package.json scripts 完成`);

  // 配置 commit hooks
  logs.info(`Step ${++step}. 配置 git commit hooks`);
  execSync(`npx husky install`);
  execSync(`npx husky add .husky/commit-msg 'npx commitlint --edit $1'`);
  execSync(`npx husky add .husky/pre-commit 'npm run lint && npm run prettier --edit $1'`);
  logs.success(`Step ${step}. 配置 git commit hooks 成功`);

  logs.info(`Step ${++step}. 写入配置文件`);
  generateTemplate(cwd, config);
  logs.success(`Step ${step}. 写入配置文件成功`);

  // 完成信息
  logs.result('初始化完成', true);
};
