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
