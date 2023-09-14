# sunny-fe-lint

`sunny-fe-lint` 是我自用的配套 Lint 工具，可以为项目一键接入规范，保障项目的编码规范和代码质量。

| 规范                                                    | Lint 工具                                                    |
|-------------------------------------------------------|------------------------------------------------------------|
| JavaScript 编码规范 <br/> TypeScript 编码规范 <br/> Node 编码规范 | [ESLint](https://eslint.org/)                              |           |
| CSS 编码规范                                              | [stylelint](https://stylelint.io/)                         |      |
| Git 规范                                                | [commitlint](https://commitlint.js.org/#/)                 |     |
| 文档规范                                                  | [markdownlint](https://github.com/DavidAnson/markdownlint) | |

## CLI 使用

### 安装

在终端执行：

```bash
pnpm install sunny-fe-lint -g
```

安装完成后，可执行 `sunny-fe-lint -h` 以验证安装成功。

### 使用

#### `sunny-fe-lint init`：一键接入

在项目根目录执行 `sunny-fe-lint init`，即可一键接入规范，为项目安装规范 `Lint` 所需的依赖和配置。

具体会做以下事情：

- 安装各种依赖：包括 `Linter`
  依赖，如 [ESLint](https://eslint.org/)、[stylelint](https://stylelint.io/)、[commitlint](https://commitlint.js.org/#/)、[markdownlint](https://github.com/DavidAnson/markdownlint)
  等。
- 写入各种配置文件，包括：
  - `.eslintrc`、`.eslintignore`：ESLint 配置及黑名单文件
  - `.stylelintrc、`.stylelintignore`：stylelint 配置及黑名单文件
  - `.commitlintrc`：commitlint 配置
  - `.markdownlint`、`.markdownlintignore`：`markdownlint` 配置及黑名单文件
  - `.prettierrc`：符合规范的 [Prettier 配置](https://prettier.io/docs/en/configuration.html)
  - `.editorconfig`：符合规范的 [editorconfig](https://editorconfig.org/)
  - `.vscode/extensions.json`
    ：写入规范相关的 [VSCode 插件推荐](https://code.visualstudio.com/docs/editor/extension-gallery#_workspace-recommended-extensions)
    ，包括 `ESLint`、`stylelint`、`markdownlint`、`prettier` 等
  - `.vscode/settings.json`
    ：写入规范相关的 [VSCode 设置](https://code.visualstudio.com/docs/getstarted/settings#_settings-file-locations)
    ，设置 `ESLint` 和 `stylelint` 插件的 `validate` 及**保存时自动运行 fix**，如果选择使用 `Prettier`
    ，会同时将 `prettier-vscode` 插件设置为各前端语言的 defaultFormatter，并配置**保存时自动格式化**

- 配置 git commit 卡口：使用 [husky](https://www.npmjs.com/package/husky) 设置代码提交卡口

> 注 1：如果项目已经配置过 ESLint、stylelint 等 Linter，执行 `sunny-fe-lint init` 将会提示存在冲突的依赖和配置，并在得到确认后进行覆盖：
>
> 注 2：如果项目的 .vscode/ 目录被 .gitignore 忽略，可以在拉取项目后单独执行 `sunny-fe-lint init --vscode`
> 命令写入 `.vscode/extensions.json` 和 `.vscode/settings.json` 配置文件

## 常见问题

### TypeScript 项目扫描性能问题

如果你的 TS 项目 commit 卡口和 `sunny-fe-lint scan` 运行时间很长，可以通过如下在 `.eslintrc.js` 中增加以下配置提升性能：

```js
module.exports = {
  parserOptions: {
    project: [], // for lint performance
    createDefaultProgram: false, // for lint performance
  },
  rules: {
    '@typescript-eslint/dot-notation': 0, // for lint performance
    '@typescript-eslint/restrict-plus-operands': 0, // for lint performance
  },
};
```
