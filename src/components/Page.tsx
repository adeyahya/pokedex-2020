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
      <nav className="flex items-center justify-between flex-wrap bg-indigo-900 p-5 fixed w-full top-0 left-0">
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
        <div>
          <Link href="/search">
            <a>
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="search"
                width="1.4rem"
                height="1.4rem"
                className="text-white"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
              </svg>
            </a>
          </Link>
        </div>
      </nav>
      <div className="pt-20">{children}</div>
    </div>
  );
});
