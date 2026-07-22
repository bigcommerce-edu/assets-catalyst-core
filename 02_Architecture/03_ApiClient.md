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

## GraphQL Proxy

Catalyst's native GraphQL requests originate server-side. However, there is the potential for functionality that needs to make GraphQL requests from the browser. To support this, Catalyst includes a built-in GraphQL proxy.

Catalyst handles `POST` requests to `/graphql` on the storefront domain and proxies them to BigCommerce. This makes it possible for client-side libraries like [`checkout-sdk-js`](https://github.com/bigcommerce/checkout-sdk-js) to make GraphQL requests without exposing the storefront token in the browser.

The proxy authenticates with the more restricted `BIGCOMMERCE_STOREFRONT_UNAUTHENTICATED_TOKEN`, a private storefront token limited to the "Unauthenticated" scope.

To be handled by the proxy, a request must include the `x-catalyst-graphql-proxy-requester` header. The value `checkout-sdk-js` is allowed by default.

See `proxies/with-graphql-proxy.ts` in the Catalyst codebase for the implementation details.