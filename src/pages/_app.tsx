import { NextIntlProvider } from "next-intl";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { createGlobalStyle } from "styled-components";
import "../styles/globals.css";

const GlobalStyle = createGlobalStyle`
:root {
  --white: #fff;
  --black: #000;
  --transparent: transparent;

  --gray: #C4C4C4;
  --dark-gray: #424242;

  --light-blue: #f0f8ff;
  --blue: #67BDFF;
  --dark-blue: #1c9cfd;
  --darker-blue: #0079cf;
  --yellow: #ffe554;
  --pink: #ce679a;
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
