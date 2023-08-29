import initAction from './actions/init';

export const init = async (options) => {
  return await initAction({
    ...options,
    checkVersionUpdate: false,
  });
};
init({});
