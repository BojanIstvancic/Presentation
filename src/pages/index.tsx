import React from "react";
import Layout from "../components/Layout";

const messages = {
  sr: {
    message: "message",
  },
  en: {
    message: "message",
  },
};

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = ({}) => {
  return (
    <div>
      <Layout>
        <p>Test text</p>
      </Layout>
    </div>
  );
};

export default HomePage;
