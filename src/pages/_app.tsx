import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../utils/apollo/useApollo';
import { FunctionComponent } from 'react';

const App: FunctionComponent<Record<string, any>> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
