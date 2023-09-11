import { Config, PKG, ScanOptions } from '../../types';
import { ESLint } from 'eslint';
export declare function getESLintConfig(options: ScanOptions, pkg: PKG, config: Config): ESLint.Options;
