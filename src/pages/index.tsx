import { GetStaticPropsContext } from "next";
import React from "react";
import Layout from "../components/Layout";
import { useTranslations } from "use-intl";
import styled from "styled-components";
import Container from "../components/Container";
import Image from "next/image";
import HomeImage from "public/images/pages/index/home-image.png";

const StyledMainContent = styled.main``;

const Home = styled.section``;
const HomeInner = styled.div`
  padding: 40px 0;
`;
const HomeTitle = styled.h1``;
const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const HomeButton = styled.a`
  margin-top: 15px;
  padding: 12px 25px;
  background: var(--blue);
  font-weight: bold;
  color: var(--white);
  border-radius: 25px;
  box-shadow: 0 6px 18px 0 var(--blue);

  transition: all 500ms ease;

  &:hover {
    background: var(--dark-blue);
  }
`;

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = ({}) => {
  const translation = useTranslations("home");

  return (
    <Layout>
      <StyledMainContent>
        <Home>
          <Container>
            <HomeInner>
              <HomeTitle>{translation("text")}</HomeTitle>
              <HomeContent>
                <Image
                  src={HomeImage}
                  alt="home-image"
                  width="290"
                  height="290"
                  style={{ borderRadius: "0% 28%" }}
                />
                <HomeButton
                  href="/index/CV.pdf"
                  download="Bojan-Istvancic-CV"
                  target="_blank"
                >
                  {translation("home-download")}
                </HomeButton>
              </HomeContent>
            </HomeInner>
          </Container>
        </Home>
      </StyledMainContent>
    </Layout>
  );
};

export default HomePage;

export function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: require(`../translations/${locale}.json`),
    },
  };
}
