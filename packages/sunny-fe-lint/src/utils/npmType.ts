import { sync as commandExistsSync } from 'command-exists';

// 检查 npm 类型
const npmType: Promise<'npm' | 'pnpm'> = new Promise((resolve, reject) => {
  if (commandExistsSync('pnpm')) {
    resolve('pnpm');
  } else {
    resolve('npm');
  }
});

export default npmType;
