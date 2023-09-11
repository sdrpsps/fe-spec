import { ESLINT_EXT, ESLINT_IGNORE } from '../../utils/constants';
import { extname, join } from 'path';
import fg from 'fast-glob';
import { Config, PKG, ScanOptions } from '../../types';
import { getESLintConfig } from './getESLintConfig';
import { ESLint } from 'eslint';
import { formatESLintResults } from './formatESLintResults';

export interface DoESLintOptions extends ScanOptions {
  pkg: PKG;
  config?: Config;
}

export async function doESLint(options: DoESLintOptions) {
  let files: string[] = [];
  if (options.files) {
    // 扫描指定文件
    files = options.files.filter((file) => {
      return ESLINT_EXT.includes(extname(file));
    });
  } else {
    // 按照配置文件执行扫描
    const pattern = join(
      options.include,
      `**/*.{${ESLINT_EXT.map((ext) => ext.replace(/^\./, '')).join(',')}}`,
    );
    // 拿到所有待扫描的文件
    files = await fg(pattern, {
      cwd: options.cwd,
      ignore: ESLINT_IGNORE,
    });
  }
  // 获取 eslint 实例
  const eslint = new ESLint(getESLintConfig(options, options.pkg, options.config));
  const reports = await eslint.lintFiles(files);
  // 执行 eslint
  if (options.fix) {
    await ESLint.outputFixes(reports);
  }

  return formatESLintResults(reports, options.quiet, eslint);
}
