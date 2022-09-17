import { GetStaticPropsContext } from "next";
import React from "react";
import Layout from "../components/Layout";
import { useTranslations } from "use-intl";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = ({}) => {
  const translation = useTranslations("home");

  return (
    <div>
      <Layout>
        <p>{translation("text")}</p>
      </Layout>
    </div>
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
