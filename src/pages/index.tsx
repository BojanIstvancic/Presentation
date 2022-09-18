import { GetStaticPropsContext } from "next";
import React from "react";
import Layout from "../components/Layout";
import { useTranslations } from "use-intl";
import styled from "styled-components";

const StyledMainContent = styled.main``;

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = ({}) => {
  const translation = useTranslations("home");

  return (
    <Layout>
      <StyledMainContent>
        <p>{translation("text")}Test za push</p>
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
