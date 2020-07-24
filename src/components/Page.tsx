import { FunctionComponent, ReactNode, memo } from 'react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

interface Props {
  children: ReactNode;
}

export const Page: FunctionComponent<Props> = memo(({ children }) => {
  const router = useRouter();
  const isHomepage = router.pathname === '/';

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-indigo-900 p-5">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          {!isHomepage && (
            <button onClick={router.back} className="lg:hidden mr-4">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="arrow-left"
                width="1.4rem"
                height="1.4rem"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
              </svg>
            </button>
          )}

          <Link href="/">
            <a>
              <span className="font-semibold text-xl tracking-tight">Pokedex</span>
            </a>
          </Link>
        </div>
      </nav>
      {children}
    </div>
  );
});
