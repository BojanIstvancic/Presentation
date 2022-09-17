import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import Head from "next/head";
import { NextIntlProvider } from "next-intl";

const GlobalStyle = createGlobalStyle`
:root {
  --white: #fff;
  --black: #000;
  --dark-gray: #424242;
  --gray: #C4C4C4;
  --blue: #67BDFF;
}

::selection {
    background: var(--blue);
    color: var(--white);
}

html {
  font-family: "Sora";
  color: var(--dark-gray);
}
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title key="title">Portfolio | Bojan Istvancic</title>
      </Head>
      <NextIntlProvider messages={pageProps.messages}>
        <Component {...pageProps} />
      </NextIntlProvider>
    </>
  );
}

export default MyApp;
