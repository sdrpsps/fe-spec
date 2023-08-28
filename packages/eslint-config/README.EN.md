# sunny-eslint-config

> Sunny's Personal JavaScript TypeScript Node Guidelines

Provides multiple sets of configuration files to support various project types, including `JavaScript`, `TypeScript`, `React`, `Vue`, and `Node.js`.

## JavaScript Project - sunny-eslint-config

For native `JavaScript` projects without using `React` or `Vue`, this configuration uses `ESLint` native rules and [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) rules, utilizing [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser) as the `parser`, which is the default configuration for this package.

### Dependencies

- [@babel/core](https://www.npmjs.com/package/@babel/core)@^7.16.0
- [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser)@^7.16.3
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.25.3

### Installation

```shell
pnpm install -D sunny-eslint-config @babel/core @babel/eslint-parser eslint-plugin-import
```

### Configuration

```json
{
  "extends": [
    "sunny-eslint-config"
  ]
}
```

## JavaScript + React Project - sunny-eslint-config/react

For JS React projects, this configuration inherits the default configuration and enables rules from [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) and [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks).

### Dependencies

- [@babel/core](https://www.npmjs.com/package/@babel/core)@^7.16.0
- [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser)@^7.16.3
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.25.3
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)@^7.17.0
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)@^4.2.0
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)@^6.3.1 (optional)

### Installation

```shell
pnpm install -D sunny-eslint-config @babel/core @babel/eslint-parser eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks
```

### Configuration

```json
{
  "extends": [
    "sunny-eslint-config/react"
  ]
}
```

If accessibility is required:

```shell
pnpm install -D eslint-plugin-jsx-a11y
```

```json
{
  "extends": [
    "sunny-eslint-config/react",
    "sunny-eslint-config/jsx-a11y"
  ]
}
```

## JavaScript + Vue Project - sunny-eslint-config/vue

For `JS Vue` projects, this configuration inherits the default configuration and enables rules from [eslint-plugin-vue](https://www.npmjs.com/package/eslint-plugin-vue) using [vue-eslint-parser](https://www.npmjs.com/package/vue-eslint-parser) as the parser.

### Dependencies

- [@babel/core](https://www.npmjs.com/package/@babel/core)@^7.16.0
- [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser)@^7.16.3
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.25.3
- [vue-eslint-parser](https://www.npmjs.com/package/vue-eslint-parser)@^7.0.0
- [eslint-plugin-vue](https://www.npmjs.com/package/eslint-plugin-vue)@^7.3.0

### Installation

```shell
pnpm install -D sunny-eslint-config @babel/core @babel/eslint-parser eslint-plugin-import vue-eslint-parser eslint-plugin-vue
```

### Configuration

```json
{
  "extends": [
    "sunny-eslint-config/vue"
  ]
}
```

## JavaScript (Node.js) Project - sunny-eslint-config/node

For Node.js projects, this configuration inherits the default configuration and rules from [eslint-config-egg](https://github.com/eggjs/eslint-config-egg/blob/master/lib/rules/node.js), combining ESLint native rules and rules from [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node).

### Dependencies

- [@babel/core](https://www.npmjs.com/package/@babel/core)@^7.16.0
- [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser)@^7.16.3
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.25.3
- [eslint-config-egg](https://www.npmjs.com/package/eslint-config-egg)@^10.0.0

### Installation

```shell
pnpm install -D sunny-eslint-config @babel/core @babel/eslint-parser eslint-plugin-import eslint-config-egg
```

### Configuration

```json
{
  "extends": [
    "sunny-eslint-config/node"
  ]
}
```

## TypeScript Project - sunny-eslint-config/typescript

For TypeScript projects without using `React` or `Vue`, this configuration inherits the default configuration and enables rules from [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin), using [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser) as the parser.

### Dependencies

- [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser)@^5.0.0
- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)@^5.0.0
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.25.3
- [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript)@2

### Installation

```shell
pnpm install -D sunny-eslint-config @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript
```

### Configuration

```json
{
  "extends": [
    "sunny-eslint-config/typescript"
  ]
}
```

Ensure that the project has the `typescript` dependency installed. Additionally, if the project's `TS` configuration file is not `./tsconfig.json`, you need to set the `parserOptions.project` field in `.eslintrc`, for example:

```json
{
  "extends": "sunny-eslint-config/typescript",
  "parserOptions": {
    "project": "./tsconfig.eslint.json"
  }
}
```

## TypeScript + React Project - sunny-eslint-config/typescript/react

For `TS React` projects, this configuration inherits the configuration of `JS React` projects and enables rules from [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin), using [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser) as the parser.

### Dependencies

- [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser)@^5.0.0
- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)@^5.0.0
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.25.3
- [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript)@2
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)@^7.17.0
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)@^4.2.0
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)@^6.3.1 (optional)

### Installation

```shell
pnpm install -D sunny-eslint-config @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript eslint-plugin-react eslint-plugin-react-hooks
```

### Configuration

```json
{
  "extends": [
    "sunny-eslint-config/typescript/react"
  ]
}
```

If accessibility is required:

```shell
pnpm install -D eslint-plugin-jsx-a11y
```

```json
{
  "extends": [
    "sunny-eslint-config/typescript/react",
    "sunny-eslint-config/jsx-a11y"
  ]
}
```

## TypeScript + Vue Project - sunny-eslint-config/typescript/vue

For `TS Vue` projects, this configuration inherits the configuration of `JS Vue` projects and enables rules from [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin), using [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser) as the parser.

### Dependencies

- [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser)@^5.0.0
- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)@^5.0.0
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.25.3
- [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript)@2
- [vue-eslint-parser](https://www.npmjs.com/package/vue-eslint-parser)@^7.0.0
- [eslint-plugin-vue](https://www.npmjs.com/package/eslint-plugin-vue)@^7.3.0

### Installation

```shell
pnpm install -D sunny-eslint-config @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript vue-eslint-parser eslint-plugin-vue
```

### Configuration

```json
{
  "extends": [
    "sunny-eslint-config/typescript/vue"
  ]
}
```

## TypeScript (Node.js) Project - sunny-eslint-config/typescript/node

For TypeScript(Node) projects without using `React` or `Vue`, this configuration inherits the configuration of `JS Node.js` projects and enables rules from [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin), using [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser) as the parser.

### Dependencies

- [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser)@^5.0.0
- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)@^5.0.0
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.25.3
- [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript)@2
- [eslint-config-egg](https://www.npmjs.com/package/eslint-config-egg)@^10.0.0

### Installation

```
pnpm install -D sunny-eslint-config @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript eslint-config-egg
```

### Configuration

```json
{
  "extends": [
    "sunny-eslint-config/typescript/node"
  ]
}
```

## Using with Prettier

If your project uses [Prettier](https://prettier.io/) for code formatting, some rules from this package might conflict with Prettier's formatting results, [such as this rule](https://github.com/typescript-eslint/typescript-eslint/issues/372). To avoid conflicts, you need to manually install [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) and [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier):

### Installation

```sh
pnpm install --save-dev eslint-config-prettier eslint-plugin-prettier
```

### Configuration

Modify your `.eslintrc` by adding `prettier` to the `extends` configuration, as shown below (using TS React project as an example):

```json
{
  "extends": [
    "sunny-eslint-config/typescript/react",
    "prettier"
  ]
}
```

For more information, read [Prettier - Integrating with Linters](https://prettier.io/docs/en/integrating-with-linters.html).

## Downgrading Style Issues

To ensure consistent code style, many style-related rules in this package are set to the `error` level to prompt developers' attention. If you believe certain style issues are not severe enough to be treated as `error` (some users encounter process interruptions based on ESLint errors), this package provides a configuration named 'essential'. This configuration downgrades all style issues to the `warn` level, reporting only essential issues as `error`. To use this configuration, append `/essential` to the respective `sunny-eslint-config` configuration, such as `sunny-eslint-config/essential/react` for JS React projects and `sunny-eslint-config/essential/typescript/vue` for TS Vue projects.

## Learn More

- If you're unfamiliar with ESLint, you can read the [Getting Started](https://eslint.org/docs/user-guide/getting-started) guide on the official website for a quick introduction.
- To configure ESLint in your IDE, refer to the [Integrations](http://eslint.org/docs/user-guide/integrations) section of the official website.
- To customize your project's ESLint configuration based on inheriting from this package, consult the [Configuring ESLint](https://eslint.org/docs/user-guide/configuring) guide on the official website. Some commonly used ESLint configuration fields are explained
