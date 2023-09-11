import { Config, PKG, ScanOptions } from '../../types';
import { ESLint } from 'eslint';
import { ESLINT_EXT } from '../../utils/constants';
import glob from 'glob';
import path from 'path';
import { getESLintDefaultConfig } from './getESLintDefaultConfig';
import fs from 'fs-extra';

// 获取 eslint 配置
export function getESLintConfig(options: ScanOptions, pkg: PKG, config: Config): ESLint.Options {
  const { cwd, fix, ignore } = options;
  const eslintConfig: ESLint.Options = {
    cwd,
    fix,
    ignore,
    extensions: ESLINT_EXT,
    errorOnUnmatchedPattern: false,
  };

  if (config.eslintOptions) {
    // 如果用户传入了 eslintOptions，则合并用户的
    Object.assign(eslintConfig, config.eslintOptions);
  } else {
    // 扫描目录下有无 .eslintrc 文件，否则使用默认配置
    const eslintConfigFiles = glob.sync('.eslintrc?(.@(js|yaml|yml|json))', { cwd });
    if (eslintConfigFiles.length === 0 && !pkg.eslintConfig) {
      eslintConfig.resolvePluginsRelativeTo = path.resolve(__dirname, '../../');
      eslintConfig.useEslintrc = false;
      eslintConfig.baseConfig = {
        extends: [getESLintDefaultConfig(cwd, pkg), ...(config.enablePrettier ? ['prettier'] : [])],
      };
    }
    // 扫描目录下有无 .eslintignore 文件，否则使用默认配置
    const eslintIgnoreFiles = path.resolve(cwd, '.eslintignore');
    if (!fs.existsSync(eslintIgnoreFiles) && !pkg.eslintIgnore) {
      eslintConfig.ignorePath = path.resolve(__dirname, '../config/_eslintignore.ejs');
    }
  }

  return eslintConfig;
}
