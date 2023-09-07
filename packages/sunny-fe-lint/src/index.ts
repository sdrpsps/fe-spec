import initAction from './actions/init';
import { InitOptions } from './types';

export const init = async (options: InitOptions) => {
  return await initAction({
    ...options,
    checkVersionUpdate: false,
  });
};
