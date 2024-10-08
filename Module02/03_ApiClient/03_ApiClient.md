# Type Safety

Manual types:

```javascript
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