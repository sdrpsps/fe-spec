import { Config, PKG, ScanOptions, ScanReport, ScanResult } from '../types';
import path from 'path';
import fs from 'fs-extra';
import { PACKAGE_NAME } from '../utils/constants';
import { doMarkdownlint, doPrettier, doStylelint } from '../lint';
import { doESLint } from '../lint';

export default async (options: ScanOptions): Promise<ScanReport> => {
  // scan 与 fix 的区别在于，fix 的值
  const { cwd, fix, outputReport, config: scanConfig } = options;

  // 读取配置文件
  const readConfigFile = (pth: string) => {
    const localPath = path.resolve(cwd, pth);
    return fs.existsSync(localPath) ? require(localPath) : {};
  };

  // 读取 package.json
  const pkg: PKG = readConfigFile('package.json');
  // 读取配置否则读取本地脚手架配置文件
  const config: Config = scanConfig || readConfigFile(`${PACKAGE_NAME}.config.js`);
  // 定义在运行时的错误
  const runErrors: Error[] = [];
  // 定义扫描结果
  let results: ScanResult[] = [];

  // prettier
  if (fix && config.enablePrettier !== false) {
    await doPrettier(options);
  }

  // eslint
  if (fix && config.enableESLint !== false) {
    try {
      const eslintResults = await doESLint({ ...options, pkg, config });
      results = results.concat(eslintResults);
    } catch (e) {
      runErrors.push(e);
    }
  }

  // stylelint
  if (fix && config.enableStylelint !== false) {
    try {
      const stylelintResults = await doStylelint({ ...options, pkg, config });
      results = results.concat(stylelintResults);
    } catch (e) {
      runErrors.push(e);
    }
  }

  // markdownlint
  if (fix && config.enableMarkdownlint !== false) {
    const markdownlintResults = await doMarkdownlint({ ...options, pkg, config });
    results = results.concat(markdownlintResults);
    try {
    } catch (e) {
      runErrors.push(e);
    }
  }

  // 生成报告
  if (outputReport) {
    const reportPath = path.resolve(process.cwd(), `./${PACKAGE_NAME}-report.json`);
    fs.outputFile(reportPath, JSON.stringify(results, null, 2), () => {});
  }
  return {
    results,
    errorCount: results.reduce((count, { errorCount }) => count + errorCount, 0),
    warningCount: results.reduce((count, { warningCount }) => count + warningCount, 0),
    runErrors,
  };
};
