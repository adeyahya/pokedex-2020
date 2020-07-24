/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextPageContext } from 'next';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { toIdValue } from 'apollo-utilities';

const isProduction = process.env.NODE_ENV === 'production';

export const createApolloClient = (
  initialState: NormalizedCacheObject = {},
  ctx: NextPageContext | null
) => {
  const fetchOptions = {
    agent: null,
  };

  // If you are using a https_proxy, add fetchOptions with 'https-proxy-agent' agent instance
  // 'https-proxy-agent' is required here because it's a sever-side only module
  if (typeof window === 'undefined') {
    if (process.env.https_proxy) {
      fetchOptions.agent = new (require('https-proxy-agent'))(process.env.https_proxy);
    }
  }

  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    credentials: 'same-origin',
    fetch,
    fetchOptions,
  });

  const cache: InMemoryCache = new InMemoryCache({
    cacheRedirects: {
      Query: {
        pokemon: (_, args) =>
          // @ts-ignore
          toIdValue(cache.config.dataIdFromObject({ __typename: 'Pokemon', id: args.name }) || ''),
      },
    },
  }).restore(initialState);

  return new ApolloClient({
    connectToDevTools: !isProduction && !ctx,
    ssrMode: Boolean(ctx),
    link: ApolloLink.from([httpLink]),
    cache,
  });
};
