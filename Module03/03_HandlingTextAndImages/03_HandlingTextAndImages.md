# Handling Text and Images

## Localizing Static Text

### en.json translations

```json
"Home": {
  "Carousel": {
    "bestSellingProducts": "Best Selling Products",
    "featuredProducts": "Featured Products",
    "newestProducts": "Newest products"
  }
}
```

### fr.json translations

```json
"Home": {
  "Carousel": {
    "bestSellingProducts": "Produits les plus vendus",
    "featuredProducts": "Produits populaires",
    "newestProducts": "Produits les plus recentsProduits"
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
import { LocaleType } from '~/i18n';

interface Props {
  params: {
    locale: LocaleType;
  };
}

export default async function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'Home' });

  return (
    <div>
      <h2>{t('Carousel.featuredProducts')}</h2>
      {/* ... */}
    </div>
  );
}
```

### Server component wrapper for client translations

```javascript
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, } from 'next-intl/server';
import { LocaleType } from '~/i18n';

interface Props {
  params: {
    locale: LocaleType;
  };
}

export default async function Home({ params: { locale } }: Props) {
  const messages = await getMessages({ locale });

  return (
    <div>
      <NextIntlClientProvider locale={locale} 
        messages={{ Product: messages.Product ?? {} }}>
        <ProductCardCarousel {/* ... */} />
      </NextIntlClientProvider>
    </div>
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

## Image Tools

### BCImage example

```javascript
<BcImage
  src={obj.image.urlTemplate}
  width={500}
  height={500}
/>
```

### BCImage with sizing

```javascript
<BcImage
  src={obj.image.urlTemplate}
  width={500}
  height={500}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

### WebDAV and Image Manager examples

```javascript
import { contentImageUrl, imageManagerImageUrl } from '~/lib/store-assets';
import { BcImage } from '../bc-image';

{/* Loads a WebDAV content image with dynamic srcset support */}
<BcImage src={contentImageUrl("myimage.png")} width={500} />

{/* Loads an Image Manager image, but all loaded URLs will use "500w" size */}
<BcImage src={imageManagerImageUrl("myimage.png", "500w")} width={500} />
```