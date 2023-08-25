# sunny-markdownlint-config

Language: [中文](README.md) | [English](README.EN.md)

> Sunny 自用的 MarkDown 文档规范

支持配套的 [markdownlint 可共享配置](https://www.npmjs.com/package/markdownlint#optionsconfig)。

## 安装

需要先行安装 [markdownlint](https://www.npmjs.com/package/markdownlint)：

```bash
pnpm install sunny-markdownlint-config markdownlint -D
```

## 使用

在 `.markdownlint.json` 中继承本包:

```json
{
  "extends": "sunny-markdownlint-config"
}
```
