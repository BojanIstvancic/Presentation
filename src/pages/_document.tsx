import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
          // Iphone, Ipad
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
          // Mac
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
          // windows
        />
        <link
          rel="manifest"
          type="image/png"
          sizes="16x16"
          href="/site.webmanifest"
          // android-chrome-512x512, android-chrome-192x192
        />
        <link
          rel="mask-icon"
          type="/safari-pinned-tab.svg"
          color="red"
          // IOS
        />
        <meta name="ms-application-TileColor" content="#67BDFF" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
