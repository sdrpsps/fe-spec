import npmType from './npmType';
import { execSync } from 'child_process';

export default async (config: Record<string, any>) => {
  // 默认依赖
  const defaultDeps = [
    'prettier',
    // eslint 相关依赖
    'eslint',
    '@babel/core',
    '@babel/eslint-parser',
    'eslint-config-alloy',
    'eslint-config-prettier',
    'eslint-plugin-prettier',
    // commitlint 相关依赖
    'husky',
    '@commitlint/cli',
    '@commitlint/config-conventional',
  ];

  // eslint 相关依赖
  const eslintDeps = {
    typescript: 'typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin',
    react: '@babel/preset-react@latest eslint-plugin-react',
    vue: 'vue-eslint-parser eslint-plugin-vue',
  };

  // stylelint 相关依赖
  const stylelintDeps = [
    'stylelint',
    'stylelint-scss',
    'stylelint-config-prettier',
    'stylelint-config-recess-order',
  ];

  // 安装依赖列表
  const dependencies = [
    ...defaultDeps,
    // 根据 eslint 类型选择依赖
    config.eslintType.includes('typescript') ? eslintDeps.typescript : '',
    config.eslintType.includes('react') ? eslintDeps.react : '',
    config.eslintType.includes('vue') ? eslintDeps.vue : '',
    // 根据是否启用 stylelint 选择依赖
    config.enableStylelint ? stylelintDeps.join(' ') : '',
    // 根据是否启用 markdownlint 选择依赖
    config.enableMarkdownlint ? 'markdownlint' : '',
  ].filter(Boolean);

  // 选择 npm 包管理器
  const npm = await npmType;

  // 开始安装依赖
  execSync(`${npm} add -D ${dependencies.join(' ')}`, { stdio: 'inherit' });
};
