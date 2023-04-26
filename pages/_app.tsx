/* eslint-disable react/no-unescaped-entities */
import { ThemeProvider } from "styled-components";
import GlobalStyles from "utils/constants/global-styles";
import theme from "utils/constants/theme";
import useErrorBoundary from "use-error-boundary";
import { useEffect, useState } from "react";
import { AppProps } from "next/app";

function Main({ Component, pageProps }: any) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  const { ErrorBoundary, didCatch, error } = useErrorBoundary();

  return (
    <>
      {didCatch ? (
        <h4>An error has been caught: {error.message}</h4>
      ) : (
        <ErrorBoundary>
          <Main Component={Component} pageProps={pageProps} />
        </ErrorBoundary>
      )}
    </>
  );
}

export default MyApp;
