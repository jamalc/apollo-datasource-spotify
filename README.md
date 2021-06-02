# Apollo Data Source Spotify

Apollo Data Source Spotify encapsulates fetching data from the Spotify API.

## Getting Started

### Install

`npm install apollo-datasource-rest dataloader graphql`

### Configure

```js
import { SpotifyAPI } from 'apollo-datasource-spotify';

const apollo = new ApolloServer({
  context: ({ req }) => ({
    authorization: req.headers.authorization,
  }),
  dataSources: () => ({
    spotify: new SpotifyAPI(),
  }),
});
```

### Usage

```js
export const resolvers = {
  Query: {
    me(root, args, context) {
      return context.dataSources.spotify.me();
    },
  },
};
```

#### Batch Requests

```js
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

### Throttle Requests

If you run into issues with rate-limiting, try throttling requests with something
like [bottleneck](https://www.npmjs.com/package/bottleneck).

`npm install --save bottleneck`

```js
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

## Spotify GraphQL Schema

To use the Spotify GraphQL schema implement your own
[custom scalar](https://www.apollographql.com/docs/apollo-server/schema/custom-scalars/)
JSON type or use `graphql-type-json`.

### Install (optional)

`npm install --save graphql-type-json`

### Configure

```js
import { ApolloServer, gql } from 'apollo-server';
import { SpotifyAPI, typeDefs, resolvers } from 'apollo-datasource-spotify';
import GraphQLJSON from 'graphql-type-json';

const apollo = new ApolloServer({
  context: ({ req }) => ({
    authorization: req.headers.authorization,
  }),
  dataSources: () => ({
    spotify: new SpotifyAPI(),
  }),
  typeDefs: gql(typeDefs()),
  resolvers: resolvers({ JSON: GraphQLJSON }),
});
```

### Usage

```
query {
  spotify {
    getAlbum(id: "42j41uUwuHZT3bnedq2XtM") {
      id
      name
    }
    getAlbumsTracks(id: "42j41uUwuHZT3bnedq2XtM") {
      items {
        ... on SimplifiedTrackObject {
          id
          name
          preview_url
          artists {
            id
            name
          }
        }
      }
    }
  }
}
```
