# `sunny-commitlint-config`

> Sunny's personalized git commit guidelines

Language: [中文](README.md) | [English](README.EN.md)

Supports corresponding [commitlint configuration](https://commitlint.js.org/#/concepts-shareable-config) for validating `git commit message`.

## Installation

To use, you need to install [@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli):

```bash
pnpm install sunny-commitlint-config @commitlint/cli -D
```

## Usage

Integrate this package in `commitlint.config.js`:

```javascript
module.exports = {
    extends: ['sunny-commitlint-config'],
};
```

## Setting up git hook

You can trigger `commitlint` on `git commit` using [husky](https://www.npmjs.com/package/husky).

Start by installing husky:

```bash
pnpm install husky -D
```

Then add `commit-msg` by executing:

```bash
npx husky add .husky/commit-msg 'npx commitlint --edit $1'
```

For more information, refer to the [commitlint documentation](https://commitlint.js.org/#/guides-local-setup?id=install-husky).
