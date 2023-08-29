export interface InitOptions {
    cwd: string;
    checkVersionUpdate: boolean;
    rewriteConfig?: boolean;
    eslintType?: string;
    enableESLint?: boolean;
    enableStylelint?: boolean;
    enableMarkdownlint?: boolean;
    enablePrettier?: boolean;
    disableNpmInstall?: boolean;
}
export interface PKG {
    eslintConfig?: any;
    eslintIgnore?: string[];
    stylelint?: any;
    scripts?: Record<string, string>;
    husky?: Record<string, any>;
    peerDependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
    dependencies?: Record<string, string>;
    [key: string]: any;
}
