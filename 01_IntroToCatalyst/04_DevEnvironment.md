# The Development Environment

**Installing Catalyst:**

```shell
npm create @bigcommerce/catalyst@latest
```

**With pnpm:**

```shell
corepack enable pnpm
pnpm create @bigcommerce/catalyst@latest
```

## Installer Options

**Installer options example:**

```shell
corepack enable pnpm && pnpm create @bigcommerce/catalyst@latest --store-hash <my_store_hash> --channel-id <my_channel_id> --storefront-token <my_graphql_token> --env AUTH_SECRET=<my_generated_secret> 
```

**With help option:**

```shell
pnpm dlx @bigcommerce/create-catalyst@latest create --help
```

**Installing with Makeswift:**

```shell
pnpm create @bigcommerce/catalyst@latest --gh-ref @bigcommerce/catalyst-makeswift@latest
```

## Connecting a BigCommerce Store

**Automatic reinitialization:**

```shell
pnpm dlx @bigcommerce/create-catalyst@latest init
```

## ESLint Configuration

**Running ESLint:**

```shell
pnpm run lint
```

**Custom .eslintrc.cjs:**

```javascript
const config = {
  ...
  rules: {
    ...
    'prettier/prettier': 'off',
  },
  ...
};
```

**Disabling ESLint Rules:**

```typescript
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
return jsonObject as MyRespType;
