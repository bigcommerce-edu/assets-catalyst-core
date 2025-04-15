# The API Client

## Type Safety

Manual types:

```typescript
type peopleVars = {
  ids: number[];
  limit: number;
}

type peopleResp = {
  data: Array<{
    id: number;
    firstName: string;
    lastName: string;
  }>;
}

const resp = await fetch(graphQlUrl, {
  ...,
  body: JSON.stringify({
    query: ...,
    variables: {
      ids: [1, 2], 
      limit: 10
    } satisfies peopleVars,
  }),
}).then(res => res.json()) satisfies peopleResp;
```

## Caching and Streaming

### Suspense and Streaming

**Suspense example:**

```javascript
<Suspense fallback={<FallbackComponent />}>
  <ProductInfo productId={...} />
</Suspense>
```

[Next](../04_ComponentsTheming/04_ComponentsTheming.md)