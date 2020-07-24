import { NextComponentType, NextPage } from 'next';
import { FunctionComponent } from 'react';
import { withApollo } from '../utils/apollo/withApollo';
import { Page } from '../components/Page';
import '../styles/index.css';

interface Props {
  Component: NextComponentType;
  pageProps: Record<string, unknown>;
}
const App: FunctionComponent<Props> = ({ Component, pageProps }) => {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
};

export default withApollo({ ssr: true })(App as NextPage);
