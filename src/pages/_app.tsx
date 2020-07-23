import { NextComponentType, NextPage } from 'next';
import { FunctionComponent } from 'react';
import { withApollo } from '../utils/apollo/withApollo';
import '../styles/index.css';
interface Props {
  Component: NextComponentType;
  pageProps: Record<string, unknown>;
}
const App: FunctionComponent<Props> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default withApollo({ ssr: true })(App as NextPage);
