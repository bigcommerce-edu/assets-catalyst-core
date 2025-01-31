# The Soul UI Library

## Major Concepts and Patterns

### Variants

#### Using a variant

```javascript
import { Button } from '~/components/ui/button';

export default function MyComponent() {
  return (
    <Button variant="secondary">Click Me</Button>
  );
}
```

### Reference Forwarding

Using a forwarded reference:

```javascript
import { Input } from '@/vibes/soul/form/input';
import { useRef } from 'react';

export default function MyComponent() {
  const inputRef = useRef(null);

  const someInteractiveFunction = () => {
    // Use inputRef to access a DOM element
  }

  return (
    <Input ref={inputRef} />
  )
}
```

## Asynchornous Rendering with Stream

**Component with asynchronous data fetching:**

```javascript
export async function ProductInfo({ productId }) {
  const product = await fetchProductData(productId);

  return (
    <div>
      {product.name}
      ...
    </div>
  );
}
```

**Suspense:**

```javascript
<Suspense fallback={<FallbackComponent />}>
  <ProductInfo productId={...} />
</Suspense>
```

**Stream:**

```javascript
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

[Next](../../Module03/01_Localization/01_Localization.md)