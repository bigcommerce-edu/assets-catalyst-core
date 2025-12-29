# Components and Theming

## Styling Components

### Try It Out

Try practicing the use of global styles and configuration to modify your Catalyst theme.

1. **Browse** to a product detail page on your local site.
2. **Modify** `globals.css` to change the value of `--font-size-base` to a larger or smaller value.
3. **Observe** the effect on the page's "Add to cart" button.


Note in `tailwind.config.js` where the CSS variable is used: for the `fontSize.base` configuration. A Tailwind text size class expressed as `text-base` should reflect this config. You can observe where this very class is used in the definition of the `Button` component (in the theme directory, in `primitives/button/index.tsx`).

4. Try **adding** your own `fontSize` value in `tailwind.config.js`, which can have an arbitrary key:


```js copy
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

5. **Open** the file where the `Button` component is defined and replace occurrences of `text-base` with `text-2xs`.
6. **Observe** the effect on the page's "Add to cart" button.


To follow the typical Catalyst pattern, you can take this further by establishing a global CSS variable for this size in `app/globals.css`, and reference this in your Tailwind config.

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

Practice the use of targeted CSS variables to control the appearance of a component in a specific context.

The `Button` component supports the CSS variable `--button-primary-background` to set the background color when the "primary" variant is rendered. A global value for this var (set either in `app/globals.css` or via the Site Theme configuration in Makeswift) will apply to all buttons in the storefront. However, we can set it in a narrower context if required.

1. **Browse** to a product detail page on your local site.
2. **Open** the file `app/[locale]/(default)/product/[slug]/page.tsx` and **find** `<ProductDetail>`.
3. **Wrap** `<ProductDetail>` in an element with an appropriate `style` prop to set the button background CSS var.

```html copy
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

4. **Observe** the effect on your page's "Add to cart" button.


This is a bit of a contrived example, as you will likely want to keep a consistent look and feel for buttons throughout the theme. If you do need additional appearance options beyond the existing variants, it would be advisable to modify your `Button` component definition to add new variants.

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
import { Stream, Streamable } from '@/vibes/soul/lib/streamable';
 
interface Category {
  ...
}
 
export async function TopCategories({
  categories: streamableCategories,
}: {
  // Accept a Streamable
  categories: Streamable<Category[]>;
}) {
  return <>
    // Wrap UI in <Stream> with a streamable value
    <Stream value={streamableCategories} fallback={<FallbackComponent />}>
      {(categories) => (
  
        <div>...</div>
 
      )}
    </Stream>
  </>;
}
```