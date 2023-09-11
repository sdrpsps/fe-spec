#!/usr/bin/env node
import { program } from 'commander';
import { PACKAGE_NAME, PACKAGE_VERSION } from './utils/constants';
import path from 'path';
import init from './actions/init';
import generateTemplate from './utils/generateTemplate';
import update from './actions/update';
import glob from 'glob';
import fs from 'fs-extra';
import logs from './utils/logs';
import npmType from './utils/npmType';
import { execSync } from 'child_process';
import ora from 'ora';
import scan from './actions/scan';
import printReport from './utils/printReport';
import { getAmendFiles, getCommitFiles } from './utils/git';
import spawn from 'cross-spawn';

const cwd = process.cwd();

// 检查是否安装了依赖，因为具体配置在依赖当中，否则找不到配置文件
const installDeps = async () => {
  const lintConfigFiles = [].concat(
    glob.sync('.eslintrc?(.@(js|yaml|yml|json))', { cwd }),
    glob.sync('.stylelintrc?(.@(js|yaml|yml|json))', { cwd }),
    glob.sync('.markdownlint(.@(yaml|yml|json))', { cwd }),
  );

  const nodeModules = path.resolve(cwd, 'node_modules');

  // 如果 node_modules 不存在，并且配置文件存在，则安装依赖
  if (!fs.existsSync(nodeModules) && lintConfigFiles.length > 0) {
    const npm = await npmType;
    logs.info(`检测到项目未安装依赖，正在安装 ${npm} install ${PACKAGE_NAME}`);
    execSync(`cd ${cwd} && ${npm} i`);
  }
};

program
  .version(PACKAGE_VERSION)
  .description(
    `${PACKAGE_NAME} 是 Sunny 前端编码规范工程化 的配套 Lint 工具，提供简单的 CLI 和 Node.js API，让项目能够一键接入、一键扫描、一键修复、一键升级，并为项目配置 git commit 卡点，降低项目实施规范的成本`,
  );

program
  .command('init')
  .description('一键接入：为项目初始化规范工具和配置，可以根据项目类型和需求进行定制')
  .option('--vscode', '写入.vscode/setting.json配置，请初始化一次后再执行')
  .action(async (cmd) => {
    if (cmd.vscode) {
      // 先读取配置文件，再写入配置文件
      const configPath = path.resolve(cwd, `${PACKAGE_NAME}.config.js`);
      generateTemplate(cwd, require(configPath), true);
    } else {
      await init({ cwd, checkVersionUpdate: true });
    }
  });

program
  .command('scan')
  .description('一键扫描：扫描项目中的规范问题')
  .option('-q, --quiet', '仅报告错误信息 - 默认: false')
  .option('-o, --output-report', '输出扫描出的规范问题日志')
  .option('-i, --include <dirpath>', '指定要进行规范扫描的目录')
  .option('--no-ignore', '忽略 eslint 的 ignore 配置文件和 ignore 规则')
  .action(async (cmd) => {
    await installDeps();

    const checking = ora();
    checking.start(`执行 ${PACKAGE_NAME} 代码检查`);

    const { results, errorCount, warningCount, runErrors } = await scan({
      cwd,
      fix: false,
      include: cmd.include || cwd,
      quiet: Boolean(cmd.quiet),
      outputReport: Boolean(cmd.outputReport),
      ignore: cmd.ignore,
    });

    let type = 'succeed';
    if (runErrors.length > 0 || errorCount > 0) {
      type = 'error';
    } else if (warningCount > 0) {
      type = 'warn';
    }

    checking[type]();
    if (results.length > 0) {
      printReport(results, false);
    }

    // 输出运行错误
    runErrors.forEach((err) => {
      logs.error(err.message);
    });
  });

program
  .command('fix')
  .description('一键修复：自动修复项目的代码规范扫描问题')
  .option('-i, --include <dirpath>', '指定要进行修复扫描的目录')
  .option('--no-ignore', '忽略 eslint 的 ignore 配置文件和 ignore 规则')
  .action(async (cmd) => {
    await installDeps();

    const checking = ora();
    checking.start(`执行 ${PACKAGE_NAME} 代码修复`);

    const { results } = await scan({
      cwd,
      fix: true,
      include: cmd.include || cwd,
      ignore: cmd.ignore, // 对应 --no-ignore
    });

    checking.succeed();
    if (results.length > 0) printReport(results, true);
  });

program
  .command('commit-msg-scan')
  .description('commit message 检查: git commit 时对 commit message 进行检查')
  .action(() => {
    const result = spawn.sync('commitlint', ['-E', 'HUSKY_GIT_PARAMS'], { stdio: 'inherit' });

    if (result.status !== 0) {
      process.exit(result.status);
    }
  });

program
  .command('commit-file-scan')
  .description('代码提交检查: git commit 时对提交代码进行规范问题扫描')
  .option('-s, --strict', '严格模式，对 warn 和 error 问题都卡口，默认仅对 error 问题卡口')
  .action(async (cmd) => {
    await installDeps();

    // git add 检查
    const files = await getAmendFiles();
    if (files) logs.warn(`[${PACKAGE_NAME}] changes not staged for commit: \n${files}\n`);

    const checking = ora();
    checking.start(`执行 ${PACKAGE_NAME} 代码提交检查`);

    const { results, errorCount, warningCount } = await scan({
      cwd,
      include: cwd,
      quiet: !cmd.strict,
      files: await getCommitFiles(),
    });

    if (errorCount > 0 || (cmd.strict && warningCount > 0)) {
      checking.fail();
      printReport(results, false);
      process.exitCode = 1;
    } else {
      checking.succeed();
    }
  });

program
  .command('update')
  .description(`更新 ${PACKAGE_NAME} 至最新版本`)
  .action(() => update(true));

program.parse(process.argv);
