# React Component Template

> A React Component template using Typescript for publish to NPM.

## Developing

- You can install any npm packeges as you need.
- Typescript environment is already set.

## Directories

| Directory | Description                                |
| --------- | ------------------------------------------ |
| `src`     | All components you made must be here.      |
| `demo`    | Demo page built with `create-react-app`    |
| `dist`    | Compilation files created by build command |

## Publishing NPM Package

1. Edit the `package.json` file. (`name`, `version`, `description` and so on.)
2. Run `npm publish` command to publish.

## Deploying Demo Page

1. Change current working directory to the `demo` directory.
2. Open the `package.json` file.
3. Edit the `homepage` field to fit your GitHub repository.
4. Run `npm run deploy` command to deploy.
