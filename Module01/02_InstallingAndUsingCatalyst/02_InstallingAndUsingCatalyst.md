# Installing and Using Catalyst

**Installing Catalyst:**

```shell
npm create @bigcommerce/catalyst@latest
```

## Connecting a BigCommerce Store

**Automatic reinitialization:**

```shell
npx @bigcommerce/create-catalyst@latest init
```

## ESLint Configuration

**Running ESLint:**

```shell
npm run lint
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

```javascript
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
return jsonObject as MyRespType;
```
