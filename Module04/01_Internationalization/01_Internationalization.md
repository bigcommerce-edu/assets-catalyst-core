# Internationalization

## Translations for Static Text

### Storing Translations

**Translations example:**

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

## Using Keys in React Components

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
import { useTranslations } from 'next-intl';

export const Footer = () => {
  const t = useTranslations('Components.Footer');

  return (
    <FooterSection
      ...
      contactTitle={t('contact')}
      ...
      logoLabel={t('home')}
      ...
    />
  );
};
```

## Multi-Storefront

## Path-Based

**Channel/locale mapping in `channels.config.ts`:**

```typescript
const localeToChannelsMappings: Record<string, string> = {
  fr: '12345',
};
```

[Next](../02_HandlingImages/02_HandlingImages.md)
