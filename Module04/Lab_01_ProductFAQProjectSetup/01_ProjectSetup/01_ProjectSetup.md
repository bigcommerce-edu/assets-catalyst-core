## Project Setup

### Run install

```shell
corepack enable pnpm && pnpx create-next-app@latest -e https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/tree/bcu-cat-start /path/to/working/directory
```

### Connect your store

```shell
cd /path/to/working/directory
pnpx @bigcommerce/create-catalyst@0.20.0 init
```

### Start the dev server

```shell
pnpm run dev
```

[Next](../03_CreateFaqMetafields/3.2-3.7.md)