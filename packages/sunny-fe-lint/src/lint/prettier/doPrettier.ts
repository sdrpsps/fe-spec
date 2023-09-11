import { ScanOptions } from '../../types';
import { PRETTIER_EXT, PRETTIER_IGNORE } from '../../utils/constants';
import { extname, join } from 'path';
import fg from 'fast-glob';
import { readFile, writeFile } from 'fs-extra';
import prettier from 'prettier';

interface DoPrettierOptions extends ScanOptions {}

export async function doPrettier(options: DoPrettierOptions) {
  let files: string[] = [];
  if (options.files) {
    // 扫描指定文件
    files = options.files.filter((file) => {
      return PRETTIER_EXT.includes(extname(file));
    });
  } else {
    // 按照配置文件执行扫描
    const pattern = join(
      options.include,
      `**/*.{${PRETTIER_EXT.map((ext) => ext.replace(/^\./, '')).join(',')}}`,
    );
    // 拿到所有待扫描的文件
    files = await fg(pattern, {
      cwd: options.cwd,
      ignore: PRETTIER_IGNORE,
    });
  }
  await Promise.all(files.map(formatFile));
}

// 使用 Prettier 进行代码格式化
async function formatFile(filepath: string) {
  const text = await readFile(filepath, 'utf8');
  const options = await prettier.resolveConfig(filepath);
  const formatted = prettier.format(text, { ...options, filepath });
  await writeFile(filepath, formatted);
}
