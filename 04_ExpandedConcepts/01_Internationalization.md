# Internationalization

## Translations for Static Text

### Storing Translations

**Translations example:**

```json
"ChangePassword": {
  "title": "Change password",
  "newPassword": "New password",
  "confirmPassword": "Confirm password",
  "passwordUpdated": "Password has been updated successfully!",
  "somethingWentWrong": "Something went wrong. Please try again later."
},
```

## Using Keys in React Components

### Server component translations

```typescript
import { getTranslations } from 'next-intl/server';

...

export default async function ChangePassword({ params, searchParams }: Props) {
  ...
  const t = await getTranslations('Auth.ChangePassword');

  ...

  return (
    <ResetPasswordSection
      ...
      confirmPasswordLabel={t('confirmPassword')}
      newPasswordLabel={t('newPassword')}
      title={t('title')}
    />
  );
}
```

### Client component translations

```javascript
import { useTranslations } from 'next-intl';
 
export function LoadMoreFaqs({
  ...
}: LoadMoreFaqsProps) {
  ...
  const t = useTranslations('Product.FAQ');
 
  ...
 
  return (
    ...
          <Button>
            {t('loadMore')}
          </Button>
    ...
  );
}
```

## Multi-Storefront

## Path-Based

**Channel/locale mapping in `channels.config.ts`:**

```typescript
const localeToChannelsMappings: Record<string, string> = {
  fr: '12345',
};
```
