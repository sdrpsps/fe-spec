import npmType from './npmType';
import { execSync } from 'child_process';

export default async (config: Record<string, any>) => {
  // 默认依赖
  const defaultDeps = [
    'prettier',
    'eslint',
    '@babel/core',
    '@babel/eslint-parser',
    'eslint-config-prettier',
    'eslint-plugin-prettier',
    'husky',
    'commitlint',
    'sunny-commitlint-config',
  ];

  // Vue2 使用不同版本
  if (config.eslintType === 'vue2') {
    defaultDeps.push('eslint-config-alloy@3');
  } else {
    defaultDeps.push('eslint-config-alloy');
  }

  // eslint 相关依赖
  const eslintDeps = {
    typescript: 'typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin',
    react: '@babel/preset-react@latest eslint-plugin-react',
    vue: 'vue-eslint-parser eslint-plugin-vue',
  };

  // 安装依赖列表
  const dependencies = [
    ...defaultDeps,
    config.eslintType.includes('typescript') ? eslintDeps.typescript : '',
    config.eslintType.includes('react') ? eslintDeps.react : '',
    config.eslintType.includes('vue') ? eslintDeps.vue : '',
  ].filter(Boolean);

  // 选择 npm 包管理器
  const npm = await npmType;

  // 开始安装依赖
  execSync(`${npm} i -D ${dependencies.join(' ')}`, { stdio: 'inherit' });
};
