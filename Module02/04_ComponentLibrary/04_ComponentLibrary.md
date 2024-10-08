# Major Concepts and Patterns

## Variants

### Using a variant

```javascript
import { Button } from '~/components/ui/button';

export default function MyComponent() {
  return (
    <Button variant="secondary">Click Me</Button>
  );
}
```

## Reference Forwarding

Using a forwarded reference:

```javascript
import { Button } from '~/components/ui/button';
import { useRef } from 'react';

export default function MyComponent() {
  const buttonRef = useRef(null);

  const someInteractiveFunction = () => {
    // Use buttonRef to access a DOM element
  }

  return (
    <Button ref={buttonRef}>...</Button>
  )
}
```

[Next](../../Module03/01_Localization/01_Localization.md)