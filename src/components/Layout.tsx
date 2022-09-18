import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import { useTranslations } from "use-intl";
import Footer from "./Footer";
import Header from "./Header";
import MobileNav from "./MobileNav";

const StyledLayout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

interface LayoutProps {
  children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const translation = useTranslations("meta");
  const [displayMobileNav, setDisplayMobileNav] = useState(false);
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

      <StyledLayout>
        <MobileNav
          setDisplayMobileNav={setDisplayMobileNav}
          displayMobileNav={displayMobileNav}
        />
        <Header setDisplayMobileNav={setDisplayMobileNav} />
        {children}
        <Footer />
      </StyledLayout>
    </>
  );
};

export default Layout;
