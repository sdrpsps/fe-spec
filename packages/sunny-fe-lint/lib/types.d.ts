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
