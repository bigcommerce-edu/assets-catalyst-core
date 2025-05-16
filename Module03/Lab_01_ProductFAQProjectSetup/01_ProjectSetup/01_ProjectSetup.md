## Project Setup

### Run install

```shell
corepack enable pnpm && pnpx create-next-app@latest -e https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/tree/cat-start /path/to/working/directory
```

### Connect your store

```shell
cd /path/to/working/directory
pnpm dlx @bigcommerce/create-catalyst@0.22.0 init
```

### Start the dev server

```shell
pnpm run dev
```

[Next](../03_CreateFaqMetafields/3.2-3.7.md)