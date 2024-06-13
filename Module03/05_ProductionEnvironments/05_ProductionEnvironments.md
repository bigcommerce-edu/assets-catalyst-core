# KV Store

Utilizing KV store:

```javascript
import { kv } from '~/lib/kv';

// Set a value with a unique key
await kv.set("unique/key/one", {
  expiryTime: Date.now() + (1000 * 60 * 5), // 5 minutes
  // ... custom properties
});

// Get a value
const val = await kv.get<ExpectedType>("unique/key/one");

// Get multiple values
const vals = await kv.get<ExpectedType>("unique/key/one", "unique/key/two");
```