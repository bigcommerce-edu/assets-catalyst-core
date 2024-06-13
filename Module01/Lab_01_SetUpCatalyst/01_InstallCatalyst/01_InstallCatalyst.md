# Install Catalyst

## Run the Installer

### Enable pnpm

```shell
corepack enable pnpm
```

### Run Installer

```shell
pnpm create @bigcommerce/catalyst@0.8.0 --gh-ref="@bigcommerce/catalyst-core@0.9.0"
```

### ESLint Config

[View](./1.9_.eslintrc.cjs)

## Run the Dev Server

```shell
cd /path/to/catalyst/project
pnpm run dev
```