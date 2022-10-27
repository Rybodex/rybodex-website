// Provider
import { ThemeProvider } from 'next-themes';

// Functions
import { useState, useEffect, createContext } from 'react';

// Variables
import { Style } from '@master/css';

// Hooks
import { useMediaQuery } from 'react-responsive';

// Styles
import '../styles/master.css';
import '@master/normal.css';

// Type
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { BreakpointsProvider } from '../hooks/useBreakpoints';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  const [loading, setLoading] = useState(true);

  const breakpoints = {
    tablet: useMediaQuery({ minWidth: 768 }),
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <ThemeProvider themes={Style.colorSchemes} attribute="class">
      <BreakpointsProvider breakpoints={breakpoints}>
        {getLayout(<Component {...pageProps} />)}
      </BreakpointsProvider>
    </ThemeProvider>
  );
}

export default MyApp;
