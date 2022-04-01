# Turborepo starter

This is the monorepo for iTwinUI-react.

## What's inside?

This repo uses [Yarn v1](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `packages/iTwinUI-react`: the main library containing all iTwinUI-react components.
- `apps/playground`: a Vite app for testing iTwinUI-react components in a realistic setting.

## Development

### Build

To build all apps and packages, run the following command from the monorepo root:

```console
yarn run build
```

### Develop

To develop all apps and packages, run the following command from the monorepo root:

```console
yarn run dev
```

This will start the vite playground at https://localhost:4000 and storybook at https://localhost:6006

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/features/pipelines)
- [Caching](https://turborepo.org/docs/features/caching)
- [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/features/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
