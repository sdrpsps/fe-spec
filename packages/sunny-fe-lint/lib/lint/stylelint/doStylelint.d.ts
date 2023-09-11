import { PKG, ScanOptions } from '../../types';
export interface DoStylelintOptions extends ScanOptions {
    pkg: PKG;
}
export declare function doStylelint(options: DoStylelintOptions): Promise<import("../../types").ScanResult[]>;
