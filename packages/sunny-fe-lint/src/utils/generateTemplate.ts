import path from 'path';
import glob from 'glob';
import ejs from 'ejs';
import fs from 'fs-extra';
import { ESLINT_IGNORE, MARKDOWNLINT_IGNORE, STYLELINT_EXT, STYLELINT_IGNORE } from './constants';

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

    // 跳过空文件
    if (!content.trim()) {
      continue;
    }

    fs.outputFileSync(filePath, content, 'utf-8');
  }
};
