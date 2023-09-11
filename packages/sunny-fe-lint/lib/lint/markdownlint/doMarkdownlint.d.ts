import { Config, PKG, ScanOptions } from '../../types';
export interface DoMarkdownlintOptions extends ScanOptions {
    pkg: PKG;
    config?: Config;
}
export declare function doMarkdownlint(options: DoMarkdownlintOptions): Promise<import("../../types").ScanResult[]>;
