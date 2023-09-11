import markdownlint from 'markdownlint';
import type { ScanResult } from '../../types';
export declare function formatMarkdownlintResults(results: markdownlint.LintResults, quiet: boolean): ScanResult[];
