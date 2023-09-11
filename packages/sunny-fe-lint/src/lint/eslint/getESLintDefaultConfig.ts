import { PKG } from '../../types';
import glob from 'glob';

// 获取 eslint 默认配置
export function getESLintDefaultConfig(cwd: string, pkg: PKG) {
  // 扫描目录下有无 ts 相关文件
  const tsFiles = glob.sync('./!(node_modules)/**/*.@(ts|tsx)', { cwd });
  // 扫描目录下有无 react 相关文件
  const reactFiles = glob.sync('./!(node_modules)/**/*.@(jsx|tsx)', { cwd });
  // 扫描目录下有无 vue 相关文件
  const vueFiles = glob.sync('./!(node_modules)/**/*.@(vue)', { cwd });
  // 扫描 package.json 中的依赖
  const deps = Object.keys(pkg.dependencies || {});
  // 定义语言类型
  const language = tsFiles.length > 0 ? 'typescript' : '';
  // 定义框架类型
  let framework = '';

  // 进行 package.json 中的依赖判断
  if (reactFiles.length > 0 || deps.some((dep) => dep.includes('react'))) {
    framework = 'react';
  } else if (vueFiles.length > 0 || deps.some((dep) => dep.includes('vue'))) {
    framework = 'vue';
  }

  // 根据 framework 是否有值来决定是否添加斜杠
  const frameworkPart = framework ? `/${framework}` : '';

  return `sunny-eslint-config/${language}${frameworkPart}`;
}
