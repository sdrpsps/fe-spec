import { LintResult } from 'stylelint';
import type { ScanResult } from '../../types';
export declare function formatStylelintResults(results: LintResult[], quiet: boolean): ScanResult[];
