import path from 'path';
import glob from 'glob';
import ejs from 'ejs';
import fs from 'fs-extra';
import { ESLINT_IGNORE, MARKDOWNLINT_IGNORE, STYLELINT_EXT, STYLELINT_IGNORE } from './constants';
import { mergeWith } from 'lodash';

// 合并 vscode 配置
const mergeVscodeConfig = (filePath: string, content: string) => {
  // 如果不存在路径，则直接返回
  if (!fs.existsSync(filePath)) return content;

  try {
    const targetData = fs.readJSONSync(filePath);
    const sourceData = JSON.parse(content);

    return JSON.stringify(
      mergeWith(targetData, sourceData, (targetValue, sourceValue) => {
        if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
          return [...new Set(sourceValue.concat(targetValue))];
        }
      }),
      null,
      2,
    );
  } catch (e) {
    return '';
  }
};

export default (cwd: string, data: Record<string, any>, vscode?: boolean) => {
  // 当前配置文件模板路径
  const templatePath = path.resolve(__dirname, '../config');
  // 读取当前配置文件模板
  const templates = glob.sync(`${vscode ? '_vscode' : '**'}/*.ejs`, { cwd: templatePath });
  for (const name of templates) {
    const filePath = path.resolve(cwd, name.replace(/\.ejs$/, '').replace(/^_/, '.'));
    // 生成配置文件
    let content = ejs.render(fs.readFileSync(path.resolve(templatePath, name), 'utf-8'), {
      eslintIgnores: ESLINT_IGNORE,
      stylelintExt: STYLELINT_EXT,
      stylelintIgnores: STYLELINT_IGNORE,
      markdownLintIgnores: MARKDOWNLINT_IGNORE,
      ...data,
    });

    // 合并 vscode 配置
    if (/^_vscode/.test(name)) {
      content = mergeVscodeConfig(filePath, content);
    }

    // 跳过空文件
    if (!content.trim()) {
      continue;
    }

    fs.outputFileSync(filePath, content, 'utf-8');
  }
};
