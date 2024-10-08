# Handling Text and Images

## Localizing Static Text

### en.json translations

```json
"Home": {
  "Carousel": {
    "featuredProducts": "Featured Products",
    "newestProducts": "Newest products"
  }
}
```

### fr.json translations

```json
"Home": {
  "Carousel": {
    "featuredProducts": "Produits en vedette",
    "newestProducts": "Nouveaux produits"
  }
}
```

### i18n.ts config

```javascript
const locales = ['en', 'fr'] as const;
```

### Server component translations

```javascript
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { LocaleType } from '~/i18n/routing';

interface Props {
  params: {
    locale: LocaleType;
  };
}

export default async function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const t = await getTranslations('Home' );

  return (
    <>
      {/* ... */}
      
      <div className="my-10">
        <ProductCardCarousel
          {/* ... */}
          title={t('Carousel.featuredProducts')}
        />
    </>
  );
}
```

### Client component translations

```javascript
'use client';

import { useTranslations } from 'next-intl';

export const AddToCart = () => {
  const t = useTranslations('Product.ProductSheet');

  return (
    <Button type="submit">
        t('addToCart')
    </Button>
  );
};
```

## Channel/Locale Mapping

```javascript
const localeToChannelsMappings: Partial<RecordFromLocales> = {
  fr: '12345',
};
```
