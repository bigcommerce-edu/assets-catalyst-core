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
import { Badge } from '~/components/ui/badge';
import { useRef } from 'react';

export default function MyComponent() {
  const badgeRef = useRef(null);

  const someInteractiveFunction = () => {
    // Use badgeRef to access a DOM element
  }

  return (
    <Badge ref={badgeRef} />
  )
}
```