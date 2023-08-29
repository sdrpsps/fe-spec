import { PACKAGE_NAME, PACKAGE_VERSION } from '../utils/constants';
import { execSync } from 'child_process';
import npmType from '../utils/npmType';
import logs from '../utils/logs';
import ora from 'ora';

// 检查最新版本号
const getLatestVersion = async () => {
  const npm = await npmType;
  // 联网获取最新版本号
  const latestVersion = execSync(`${npm} view ${PACKAGE_NAME} version`).toString('utf-8').trim();

  if (latestVersion === PACKAGE_VERSION) {
    logs.info(`当前已是最新版本：${PACKAGE_VERSION}`);
    return null;
  } else {
    return compareVersion(latestVersion);
  }
};

// 依次比较版本号每一位大小
const compareVersion = (latestVersion: string) => {
  const latestVersionArr = latestVersion.split('.').map(Number);
  const currentVersionArr = PACKAGE_VERSION.split('.').map(Number);

  for (let i = 0; i < latestVersionArr.length; i++) {
    if (latestVersionArr[i] > currentVersionArr[i]) {
      return latestVersion;
    } else if (latestVersionArr[i] < currentVersionArr[i]) {
      return null;
    }
  }
};

// 自动安装最新包
export default async (install = true) => {
  const checking = ora('检查最新版本中...');
  checking.start();

  try {
    const latestVersion = await getLatestVersion();
    checking.stop();

    if (latestVersion && install) {
      const updateMsg = ora(`${PACKAGE_NAME} 存在新版本，将升级至最新版本：${latestVersion}`);
      updateMsg.start();
      execSync(`${npmType} install ${PACKAGE_NAME} -g`);
      updateMsg.stop();
    } else if (latestVersion) {
      logs.warn(`${PACKAGE_NAME} 存在新版本，建议升级至最新版本：${latestVersion}`);
      logs.warn(`可以执行 ${await npmType} install ${PACKAGE_NAME} -g 来安装最新版本`);
    } else if (install) {
      logs.info(`当前已是最新版本`);
    }
  } catch (e) {
    checking.stop();
    logs.error(e);
  }
};
