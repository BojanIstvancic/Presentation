import { GetStaticPropsContext } from "next";
import React from "react";
import Layout from "../components/Layout";
import { useTranslations } from "use-intl";
import styled from "styled-components";
import Container from "../components/Container";
import Image from "next/image";
import HomeImage from "public/images/pages/index/home-image.png";
import ReactTypingEffect from "react-typing-effect";
import Accordion from "../components/Accordion";

const StyledMainContent = styled.main``;
const Section = styled.section`
  scroll-margin-top: 100px;
`;
// ---- HOME ----
const Home = styled(Section)``;
const HomeInner = styled.div`
  padding: 40px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 800px) {
    flex-direction: row-reverse;
    align-items: flex-start;
  }
`;
const HomeButton = styled.a`
  margin-top: 24px;
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

  @media (min-width: 800px) {
    border-radius: 8px;
  }
`;
const HomeTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1;

  ${HomeButton} {
    margin-top: 40px;

    @media (max-width: 799px) {
      display: none;
    }
  }
`;
const HomeTitle = styled.h1`
  margin-bottom: 40px;
  font-size: 20px;
  width: 240px;

  @media (min-width: 450px) {
    width: 400px;
  }

  @media (min-width: 800px) {
    margin-bottom: 0;
    font-size: 26px;
    width: unset;
    flex: 1;
  }

  @media (min-width: 1100px) {
    margin-top: 20px;
    font-size: 35px;
  }

  span {
    display: block;
    font-size: 1em;

    @media (min-width: 450px) {
      &.i-am,
      &.position {
        font-size: 1.5em;
      }
    }

    &.position {
      font-weight: bold;
      span {
      }
      color: var(--blue);
    }
  }
`;
const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 800px) {
    margin-right: 40px;
    justify-content: flex-start;
    align-items: flex-start;

    ${HomeButton} {
      display: none;
    }
  }
`;
const HomeImageContainer = styled.div`
  position: relative;
  height: 235px;
  width: 235px;

  @media (min-width: 800px) {
    height: 250px;
    width: 250px;
  }

  @media (min-width: 1000px) {
    height: 400px;
    width: 400px;
  }
`;

// ---- AboutMe ----
const AboutMe = styled(Section)``;
const AboutMeInner = styled.div`
  padding-bottom: 40px;
`;
const AboutMeHeading = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: left;

  span {
    font-size: 1.2em;
    color: var(--blue);
  }

  @media (min-width: 800px) {
    font-size: 48px;
  }
`;
const AboutMeContent = styled.div`
  @media (min-width: 800px) {
    display: flex;
    align-items: center;
  }
`;
const AboutMeImage = styled.img`
  margin-bottom: 24px;
  height: 200px;

  @media (min-width: 800px) {
    display: flex;
    margin-bottom: 0;
    margin-right: 80px;
    height: 300px;
  }
`;
const AboutMeText = styled.p`
  font-size: 16px;
  color: var(--black);

  @media (min-width: 800px) {
    font-size: 24px;
  }
`;

// ---- Development ----
const Development = styled(Section)``;
const DevelopmentInner = styled.div``;
const DevelopmentHeading = styled(AboutMeHeading)``;
const DevelopmentSubheading = styled.h3`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: left;
  color: var(--blue);

  @media (min-width: 800px) {
    font-size: 38px;
  }
`;

// ---- Contact ----
const Contact = styled(Section)``;
const ContactInner = styled.div``;
const ContactHeading = styled(AboutMeHeading)``;
const GetInTouch = styled.div`
  padding-bottom: 40px;
`;
const GetInTouchHeading = styled(DevelopmentSubheading)``;
const GetInTouchContent = styled.div`
  @media (min-width: 600px) {
    display: flex;
  }
`;

const GetInTouchContentInner = styled.div`
  margin-bottom: 24px;

  @media (min-width: 600px) {
    width: 50%;
    margin-bottom: 0;
    margin-right: 40px;
  }

  @media (min-width: 800px) {
    margin-right: 80px;
  }
`;
const GetInTouchImage = styled.img`
  height: 200px;

  @media (min-width: 800px) {
    height: 300px;
  }
`;
const GetInTouchText = styled.p`
  margin-bottom: 24px;
  font-size: 16px;
  color: var(--black);

  @media (min-width: 800px) {
    font-size: 24px;
  }
`;
const GetInTouchButton = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 155px;

  font-size: 16px;
  padding: 12px 18px;
  border-radius: 10px;
  border: 1px solid var(--dark-gray);

  @media (min-width: 800px) {
    font-size: 24px;
    width: 180px;
  }

  &:before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    z-index: -1;
    border-radius: 10px;
    background-color: var(--yellow);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  &:hover:before {
    width: 100%;
  }
`;
const GetInTouchButtonImage = styled.img`
  height: 17px;
  margin-left: 5px;

  @media (min-width: 800px) {
    font-size: 24px;
  }
`;
const Social = styled.div`
  padding-bottom: 40px;
`;
const SocialHeading = styled(DevelopmentSubheading)``;
const SocialContent = styled.div`
  display: flex;
`;
const SocialIcon = styled.img`
  margin-right: 20px;
  height: 50px;

  transition: all 200ms ease;
  &:hover {
    transform: rotate(17deg);
  }
`;

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = ({}) => {
  const translation = useTranslations("home");
  const position = translation("home-title-label-4");

  return (
    <Layout>
      <StyledMainContent>
        <Home id="home">
          <Container>
            <HomeInner>
              <HomeTitleContainer>
                <HomeTitle>
                  <span>{translation("home-title-label-1")}</span>
                  <span className="i-am">
                    {translation("home-title-label-2")}
                  </span>
                  <span>{translation("home-title-label-3")}</span>
                  <span className="position">
                    <ReactTypingEffect
                      text={[position]}
                      eraseDelay={6000000}
                      typingDelay={250}
                    />
                  </span>
                </HomeTitle>
                <HomeButton
                  href="/index/CV.pdf"
                  download="Bojan-Istvancic-CV"
                  target="_blank"
                >
                  {translation("home-download")}
                </HomeButton>
              </HomeTitleContainer>
              <HomeContent>
                <HomeImageContainer>
                  <Image src={HomeImage} alt="home-image" layout="fill" />
                </HomeImageContainer>
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
        <AboutMe id="about-me">
          <Container>
            <AboutMeInner>
              <AboutMeHeading>
                {translation("about-me-heading")}
                <span>.</span>
              </AboutMeHeading>
              <AboutMeContent>
                <AboutMeImage
                  src="/images/pages/index/hello.svg"
                  alt="about-me"
                />
                <AboutMeText>{translation("about-me-text")}</AboutMeText>
              </AboutMeContent>
            </AboutMeInner>
          </Container>
        </AboutMe>
        <Development id="development">
          <Container>
            <DevelopmentInner>
              <DevelopmentHeading>
                {translation("development-heading")}
                <span>.</span>
              </DevelopmentHeading>
              <DevelopmentSubheading>
                {translation("development-subheading")}
              </DevelopmentSubheading>
              <Accordion />
            </DevelopmentInner>
          </Container>
        </Development>
        <Contact id="contact">
          <Container>
            <ContactInner>
              <ContactHeading>
                {translation("contact-heading")}
                <span>.</span>
              </ContactHeading>
              <GetInTouch>
                <GetInTouchHeading>
                  {translation("contact-get-in-touch-heading")}
                </GetInTouchHeading>
                <GetInTouchContent>
                  <GetInTouchContentInner>
                    <GetInTouchText>
                      {translation("contact-get-in-touch-text")}
                    </GetInTouchText>
                    <GetInTouchButton href="mailto:bojan.istvancic@gmail.com">
                      {translation("contact-get-in-touch-button")}
                      <GetInTouchButtonImage
                        src="/images/icons/email.svg"
                        alt="e-mail"
                      />
                    </GetInTouchButton>
                  </GetInTouchContentInner>
                  <GetInTouchImage
                    src="/images/pages/index/contact.svg"
                    alt="contact"
                  />
                </GetInTouchContent>
              </GetInTouch>
              <Social>
                <SocialHeading>
                  {translation("contact-social-heading")}
                </SocialHeading>
                <SocialContent>
                  <a
                    href="https://www.linkedin.com/in/bojan-istvancic-195404127/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SocialIcon
                      src="/images/icons/linkedIn.svg"
                      alt="linkedIn"
                    />
                  </a>
                  <a
                    href="https://github.com/BojanIstvancic?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SocialIcon src="/images/icons/github.svg" alt="github" />
                  </a>
                </SocialContent>
              </Social>
            </ContactInner>
          </Container>
        </Contact>
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
