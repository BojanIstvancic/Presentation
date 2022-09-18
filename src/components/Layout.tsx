import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import { useTranslations } from "use-intl";
import Header from "./Header";

const StyledLayout = styled.div`
  min-height: 100vh;
`;

interface LayoutProps {
  children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const translation = useTranslations("meta");
  const [displayMobileNavOverlay, setDisplayMobileNavOverlay] = useState(false);
  return (
    <>
      <Head>
        <meta property="og:title" content="Portfolio | Bojan Istvancic" />
        <meta name="description" content={translation("description")} />
        <meta property="og:description" content={translation("description")} />

        <meta
          property="og:image"
          content="https://ahrefs.com/blog/wp-content/uploads/2020/01/fb-open-graph-1.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header setDisplayMobileNavOverlay={setDisplayMobileNavOverlay} />
      <StyledLayout>{children}</StyledLayout>
    </>
  );
};

export default Layout;
