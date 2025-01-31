# The Catalyst CLI Installer

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
pnpx @bigcommerce/create-catalyst@latest create --help
```

## Connecting a BigCommerce Store

**Automatic reinitialization:**

```shell
pnpx @bigcommerce/create-catalyst@latest init
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
```

[Next](../04_BuiltInIntegrations/04_BuiltInIntegrations.md)
