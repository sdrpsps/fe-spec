import { ESLint } from 'eslint';
import { ScanResult } from '../../types';
export declare function formatESLintResults(results: ESLint.LintResult[], quiet: boolean, eslint: ESLint): ScanResult[];
