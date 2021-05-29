# Apollo Data Source Spotify

## Getting Started

### Install

```
npm install apollo-datasource-rest dataloader graphql
```

### Configure

```
import { SpotifyAPI } from 'apollo-datasource-spotify';

const apollo = new ApolloServer({
  context: ({ req }) => {
    return {
      authorization: req.headers.authorization,
      // OR
      token: req.user.token,
    };
  },
  dataSources: () => ({
    spotify: new SpotifyAPI(),
  }),
  ...
});
```

### Usage

```
export const resolvers = {
  Query: {
    me(root, args, context) {
      return context.dataSources.spotify.me();
    },
  },
};
```

#### Batch Requests

```
import { batch } from 'apollo-datasource-spotify';

const resolver = async (root, args, context) {
  await batch({
    limit: 2500,
    request: (params) => dataSources.spotify.savedTracks(params),
    callback: async (savedTracks) => {
      console.log(savedTracks);
    },
  });

  return;
};
```

### Throttling Requests

If you run into issues with rate-limiting, try throttling requests with something
like [bottleneck](https://www.npmjs.com/package/bottleneck).

`npm install --save bottleneck`

```
import SpotifyAPI from 'apollo-datasource-rest';
import Bottleneck from 'bottleneck';

class ThrottledSpotifyAPI extends SpotifyAPI {
  constructor() {
    super();

    this.limiter = new Bottleneck({
      reservoir: 100,
      reservoirRefreshAmount: 100,
      reservoirRefreshInterval: 60 * 1000,
      maxConcurrent: 1,
      minTime: 333,
    });

    this.get = this.limiter.wrap(this.get.bind(this));
    this.post = this.limiter.wrap(this.post.bind(this));
    this.put = this.limiter.wrap(this.put.bind(this));
    this.delete = this.limiter.wrap(this.delete.bind(this));
  }
}
```

## TypeDefs and Resolvers (experimental)

If you use the generated typeDefs and resolvers in a schema you should also implement your own
[custom scalar](https://www.apollographql.com/docs/apollo-server/schema/custom-scalars/)
JSON type or install `graphql-type-json` and [add it to your resolver map](https://www.apollographql.com/docs/apollo-server/schema/custom-scalars/#importing-a-third-party-custom-scalar).

```
npm install --save graphql-type-json
```
