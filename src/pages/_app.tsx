import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import Head from "next/head";
import { NextIntlProvider } from "next-intl";
import { useRouter } from "next/router";

const GlobalStyle = createGlobalStyle`
:root {
  --white: #fff;
  --black: #000;
  --transparent: transparent;

  --gray: #C4C4C4;
  --dark-gray: #424242;

  --blue: #67BDFF;
  --dark-blue: #1c9cfd;
  --yellow: #ffe554;
}

::selection {
    background: var(--blue);
    color: var(--white);
}

html {
  font-family: 'Sora', sans-serif;
  color: var(--dark-gray);
}
`;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const locale = router.locale;

  return (
    <>
      <GlobalStyle />
      <Head>
        <link key={`locale-link-alternate-${locale}`} hrefLang={locale} />
        <title key="title">Portfolio | Bojan Istvancic</title>
      </Head>
      <NextIntlProvider messages={pageProps.messages}>
        <Component {...pageProps} />
      </NextIntlProvider>
    </>
  );
}

export default MyApp;
