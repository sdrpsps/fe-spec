#!/usr/bin/env node
import { program } from 'commander';
import { PACKAGE_NAME, PACKAGE_VERSION } from './utils/constants';
import path from 'path';
import init from './actions/init';
import generateTemplate from './utils/generateTemplate';

const cwd = process.cwd();

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
  .option('--no-ignore', '忽略 eslint 的 ignore 配置文件和 ignore 规则');

program
  .command('commit-msg-scan')
  .description('commit message 检查: git commit 时对 commit message 进行检查');

program
  .command('commit-file-scan')
  .description('代码提交检查: git commit 时对提交代码进行规范问题扫描');

program
  .command('update')
  .description(`更新 ${PACKAGE_NAME} 至最新版本`)
  .action(() => {});

program.parse(process.argv);
