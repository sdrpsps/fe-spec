import markdownLint from 'markdownlint';
import type { ScanOptions, PKG, Config } from '../../types';
declare type LintOptions = markdownLint.Options & {
    fix?: boolean;
};
export declare function getMarkdownlintConfig(opts: ScanOptions, pkg: PKG, config: Config): LintOptions;
export {};
