# Components and Theming

## Styling Components

### Try It Out

**Add to `tailwind.config.js`:**

```javascript
const config = {
  ...
  theme: {
    extend: {
      ...
      fontSize: {
        '2xs': '0.5rem',
        ...
      },
    },
  },
  ...
};
```

## Component Variation

### Variants

**Using a variant:**

```javascript
import { Button } from '@/vibes/soul/primitives/button';

export default function MyComponent() {
  return (
    <Button variant="secondary">Click Me</Button>
  );
}
```

### Color Scheme

**colorScheme example:**

```javascript
import { ProductCard } from '@/vibes/soul/primitives/product-card';

export default function MyComponent() {
  return (
    <ProductCard colorScheme="dark" ... />
  );
}
```

### Try It Out

**Changes to `app/[locale]/(default)/product/[slug]/page.tsx`:**

```javascript
<div 
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  style={{
    '--button-primary-background': '#f00',
  } as React.CSSProperties}
>
  <ProductDetail
    ...
  />
</div>
```

## The Toaster Component

**Toast example:**

```javascript
import { toast } from '@/vibes/soul/primitives/toaster';

toast.success('This is a success message');

toast.error('This is an error message');
```

## Asynchronous Rendering with Stream

**Stream example:**

```javascript
// fetchProductData is an async operation
const productPromise = fetchProductData(productId);

return (
  <>
    <Stream fallback={<FallbackComponent />} value={productPromise}>
      {(product) => (    
        <ProductInfo product={product} />
      )}
    </Stream>
    <Stream fallback={<FallbackComponent />} value={productPromise}>
      {(product) => (    
        <OtherProductInfo product={product} />
      )}
    </Stream>
  </>
);
```

[Next](../../Module03/Lab_01_ProductFAQProjectSetup/01_ProjectSetup/01_ProjectSetup.md)