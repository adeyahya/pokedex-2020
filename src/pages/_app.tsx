import { NextComponentType, NextPage } from 'next';
import { FunctionComponent, useRef, useEffect } from 'react';
import { debounce } from 'lodash';
import { withApollo } from '../utils/apollo/withApollo';
import { Page } from '../components/Page';
import { useRouter } from 'next/dist/client/router';
import '../styles/index.css';

interface Props {
  Component: NextComponentType;
  pageProps: Record<string, unknown>;
}
const App: FunctionComponent<Props> = ({ Component, pageProps }) => {
  const retainedScroll = useRef<Record<string, number>>({});
  const router = useRouter();

  useEffect(() => {
    window.onpopstate = () => {
      if (retainedScroll.current[router.asPath] !== undefined) {
        window.scrollTo({ left: 0, top: retainedScroll.current[router.asPath] });
      } else {
        window.scrollTo({ left: 0, top: 0 });
      }
    };

    router.events.on('routeChangeStart', () => {
      window.onscroll = () => {
        /* clear scroll event */
      };
    });

    router.events.on('routeChangeComplete', () => {
      window.onscroll = debounce(() => {
        retainedScroll.current[router.asPath] = window.scrollY;
      }, 200);
      window.scrollTo({ left: 0, top: 0 });
    });
  }, [router.asPath]);

  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
};

export default withApollo({ ssr: true })(App as NextPage);
