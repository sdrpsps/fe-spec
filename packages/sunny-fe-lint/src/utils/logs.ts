import chalk from 'chalk';

const { green, blue, yellow, red } = chalk;

export default {
  success: (msg: string) => {
    console.log(green(msg));
  },
  info: (msg: string) => {
    console.log(blue(msg));
  },
  warn: (msg: string) => {
    console.log(yellow(msg));
  },
  error: (msg: string) => {
    console.log(red(msg));
  },
  result: (msg: string, isPass: boolean) => {
    console.info(isPass ? green('✔') : red('✘'), blue(msg));
  },
};
