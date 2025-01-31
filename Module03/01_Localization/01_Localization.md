# Localization

## Translations for Static Text

### en.json translations

```json
"ChangePassword": {
    "title": "Change password",
    "heading": "Change password",
    "Form": {
      "newPasswordLabel": "New password",
      "confirmPasswordLabel": "Confirm password",
      ...
    },
    ...
  },
```

### fr.json translations

```json
"ChangePassword": {
  "title": "Modifier le mot de passe",
  "heading": "Modifier le mot de passe",
  "Form": {
    "newPasswordLabel": "Nouveau mot de passe",
    "confirmPasswordLabel": "Confirmer le mot de passe",
    ...
  },
  ...
},
```

### Server component translations

```typescript
import { getTranslations } from 'next-intl/server';

...

export default async function ChangePassword({ searchParams }: Props) {
  ...
  const t = await getTranslations('ChangePassword');

  ...

  return (
    <ResetPasswordSection
      ...
      confirmPasswordLabel={t('Form.confirmPasswordLabel')}
      newPasswordLabel={t('Form.newPasswordLabel')}
      title={t('heading')}
    />
  );
}
```

### Client component translations

```javascript
'use client';

import { useTranslations } from 'next-intl';

export const AddToCartButton = (...) => {
  const t = useTranslations('Components.AddToCartButton');

  const buttonText = () => {
    ...

    return t('addToCart');
  };

  return (
    <Button
      ...
      loadingText={t('processing')}
    >
      ...
      {buttonText()}
    </Button>
  );
};
```

## Multi-Storefront Localization

**Channel/locale mapping in channels.config.ts:**

```typescript
const localeToChannelsMappings: Record<string, string> = {
  fr: '12345',
};
```

[Next](../02_HandlingImages/02_HandlingImages.md)
