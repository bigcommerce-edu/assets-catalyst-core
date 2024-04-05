const config = {
  ...
  rules: {
    ...
    // START NEW CODE
    'import/order': 'off',
    'prettier/prettier': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off', // Temporary fix for ESLint error in Catalyst 0.3.0
    // END NEW CODE
  },
  ...
};