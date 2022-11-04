import { GetStaticPropsContext } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import HomeImage from "public/images/pages/index/home-image.png";
import React from "react";
import ReactTypingEffect from "react-typing-effect";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslations } from "use-intl";
import Accordion from "../components/Accordion";
import Container from "../components/Container";
import Layout from "../components/Layout";

const StyledMainContent = styled.main``;
const Section = styled.section`
  scroll-margin-top: 120px;
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
const DevelopmentInner = styled.div`
  padding-bottom: 40px;
`;
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
const Stack = styled.div``;
const StackHeading = styled(DevelopmentSubheading)``;
const StackIconContainer = styled.div`
  display: flex;
`;
const StackIcon = styled.img`
  height: 45px;

  &:not(:last-child) {
    margin-right: 15px;

    @media (min-width: 800px) {
      margin-right: 40px;
    }
  }

  @media (min-width: 800px) {
    height: 100px;
  }
`;

// ---- Project ----
const Projects = styled(Section)``;
const ProjectsInner = styled.div`
  padding-bottom: 40px;
`;
const ProjectsHeading = styled(AboutMeHeading)``;
const SwiperWrapper = styled.div`
  margin-left: -20px;
  margin-top: -20px;
  margin-right: -20px;
  display: flex;
  flex-wrap: wrap;
`;
const Project = styled.div`
  max-width: 400px;

  display: flex;
  flex-direction: column;

  border: 3px solid var(--light-blue);
  background: var(--light-blue);
  border-radius: 7px;
  overflow: hidden;

  margin: 20px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
const ProjectLink = styled.a`
  position: absolute;
  height: 100%;
  width: 100%;
  top: -100%;
  left: 0;
  background: rgba(0, 0, 0, 0.6);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: all 500ms ease;

  p {
    margin-bottom: 5px;
    font-size: 16px;
    color: var(--white);
  }
`;

const ProjectImageContainer = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;

  span {
    transition: all 300ms ease-in;
  }

  &:hover,
  &:focus {
    span {
      transform: scale(1.5);
    }

    ${ProjectLink} {
      top: 0;
    }
  }
`;
const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: 10px;
  flex: 1;

  border-top: 3px solid var(--darker-blue);
`;
const ProjectHeading = styled.h3`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
  color: var(--dark-gray);
`;
const ProjectTechnologies = styled.div`
  display: flex;
  margin-bottom: 15px;
  flex-wrap: wrap;
`;
const Technology = styled.span`
  font-size: 14px;
  color: var(--white);
  background-color: var(--black);
  padding: 3px 6px;
  border-radius: 100px;
  margin-right: 5px;
  margin-bottom: 5px;

  @media (min-width: 800px) {
    padding: 3px 10px;
  }

  &.scss {
    background-color: var(--pink);
  }
  &.typescript {
    background-color: var(--darker-blue);
  }
  &.react {
    background-color: #0dc2e2;
  }
  &.mui {
    background-color: #0079f2;
  }
  &.styled-components {
    background-color: #d17480;
  }
  &.firebase {
    background-color: #f9920d;
  }
  &.redux-toolkit {
    background-color: #764abc;
  }
  &.cicd {
    background-color: #8cb93d;
  }
  &.cpanel {
    background-color: #ff6b2b;
  }
`;
const ProjectDescription = styled.p`
  font-size: 16px;
  color: var(--black);
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

  const router = useRouter();
  const locale = router.locale || "en";

  const content = {
    sr: {
      items: [
        {
          title: "Frontend Developer",
          heading: "Infostud grupa",
          subheading: "Subotica, Srbija | April 2021 - radim",
          description:
            "Radim na razvoju najkorišćenije aplikacije za selekciju kandidata u Srbiji primenjujući najmodernije tehnologije - React i GraphQL. Razvoj i odžavanje vebsajta za HR Lab brend koristeći React i NextJS. Učestvovao u kompletnom rebrendiranju vebsajta u saradnji sa dizajnerima.",
        },
        {
          title: "Project Manager/Frontend Developer",
          heading: "Outfit.io",
          subheading: "Remote | Maj 2019 - April 2021",
          description:
            "Na poziciji project manager-a sam obavljao dodatne dužnosti - prijem zadataka od klijenta, praćenje i procena količine vremena potrebne za izradu zadataka, delegiranje zadataka kolegama u zavisnosti od iskustva pojedinca i pomaganje kolegama u realizaciji zadataka.",
        },
        {
          title: "Frontend Developer",
          heading: "Outfit.io",
          subheading: "Remote | Novembar 2018 - Maj 2019",
          description:
            "Radio sam na interesantnoj platformi za automatizaciju brendiranja. Dobijao informacija o zadacima, radio na razvoju i održavanju MustacheJS templejta - baneri, flajeri, brošure i animacije za onlajn oglašavanje.",
        },
      ],
    },
    en: {
      items: [
        {
          title: "Frontend Developer",
          heading: "Infostud group",
          subheading: "Subotica, Serbia | April 2021 - present",
          description:
            "Working on the most widely-used ATS software in Serbia (HR Lab ATS) using modern tech React and GraphQL,s. Development and maintenance of the website for the HR Lab brand using React and NextJS. Participated in a complete rebranding of the website in collaboration with highly skilled designers.",
        },
        {
          title: "Project Manager/Frontend Developer",
          heading: "Outfit.io",
          subheading: "Remote | May 2019 - April 2021",
          description:
            "As a project manager, I received additional obligations - gathering more tasks from the clients, tracking the required timing for each task, delegating tasks to colleagues depending on their experience, and helping colleagues with the realization of their own tasks.",
        },
        {
          title: "Frontend Developer",
          heading: "Outfit.io",
          subheading: "Remote | November 2018 - May 2019",
          description:
            "Worked on an interesting branding automation platform. Daily gathered instructions about the tasks, built and maintained MustacheJS templates - banners, flyers, brochures, and animations for online advertising.",
        },
      ],
    },
  };

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
                  href="/index/cv.pdf"
                  download="Bojan-Istvancic-CV"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {translation("home-download")}
                </HomeButton>
              </HomeTitleContainer>
              <HomeContent>
                <HomeImageContainer>
                  <Image src={HomeImage} alt="home-image" layout="fill" />
                </HomeImageContainer>
                <HomeButton
                  href="/index/cv.pdf"
                  download="Bojan-Istvancic-CV"
                  target="_blank"
                  rel="noopener noreferrer"
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
                {translation("development-experience-heading")}
              </DevelopmentSubheading>
              <Accordion
                items={content[locale as keyof typeof content].items}
              />
              <Stack>
                <StackHeading>
                  {translation("development-stack-heading")}
                </StackHeading>
                <StackIconContainer>
                  <StackIcon src="/images/icons/react.png" alt="react " />
                  <StackIcon src="/images/icons/nextjs.png" alt="nextJS " />
                  <StackIcon src="/images/icons/graphQL.png" alt="graphQL " />
                  <StackIcon
                    src="/images/icons/typescript.png"
                    alt="typescript "
                  />
                  <StackIcon src="/images/icons/tailwind.png" alt="tailwind " />
                </StackIconContainer>
              </Stack>
            </DevelopmentInner>
          </Container>
        </Development>
        <Projects id="projects">
          <Container>
            <ProjectsInner>
              <ProjectsHeading>
                {translation("projects-heading")}
                <span>.</span>
              </ProjectsHeading>
              <SwiperWrapper>
                <Swiper
                  {...{
                    // loop: true, // enable loop mode
                    // autoplay: {
                    //   delay: 2000, // delay between the slides
                    //   disableOnInteraction: false, // do not cancel the loop when the user swipes it
                    // },
                    slidesPerView: 2, // slides per view
                    // spaceBetween: 30, // space between the slides
                    // breakpoints: {
                    //   // when window width is >= 480px
                    //   480: {
                    //     slidesPerView: 1.5,
                    //     spaceBetween: 30,
                    //   },
                    //   // when window width is >= 640px
                    //   640: {
                    //     slidesPerView: 2,
                    //     spaceBetween: 40,
                    //   },
                    // },
                  }}
                ></Swiper>
                <Project>
                  <ProjectImageContainer>
                    <Image
                      layout="fill"
                      src="/images/pages/index/project-1-image.png"
                      alt="project-image-1"
                    />
                    <ProjectLink
                      href="https://github.com/BojanIstvancic/Presentation"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p style={{ marginBottom: "10px" }}>
                        {translation("projects-project-1-link-text")}
                      </p>
                      <Image
                        src="/images/icons/github-white.svg"
                        alt="github"
                        width="20"
                        height="20"
                      />
                    </ProjectLink>
                  </ProjectImageContainer>
                  <ProjectContent>
                    <ProjectHeading>
                      {translation("projects-project-1-heading")}
                    </ProjectHeading>
                    <ProjectTechnologies>
                      <Technology className="nextJS">NextJs</Technology>
                      <Technology className="typescript">TypeScript</Technology>
                      <Technology className="scss">Scss</Technology>
                      <Technology className="cicd">CI/CD</Technology>
                      <Technology className="cpanel">cPanel</Technology>
                    </ProjectTechnologies>
                    <ProjectDescription>
                      {translation("projects-project-1-description")}
                    </ProjectDescription>
                  </ProjectContent>
                </Project>
                <Project>
                  <ProjectImageContainer>
                    <Image
                      layout="fill"
                      src="/images/pages/index/project-2-image.png"
                      alt="project-image-2"
                    />
                    <ProjectLink
                      href="https://github.com/BojanIstvancic/simple-crud-app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p style={{ marginBottom: "10px" }}>
                        {translation("projects-project-2-link-text")}
                      </p>
                      <Image
                        src="/images/icons/github-white.svg"
                        alt="github"
                        width="20"
                        height="20"
                      />
                    </ProjectLink>
                  </ProjectImageContainer>
                  <ProjectContent>
                    <ProjectHeading>
                      {translation("projects-project-2-heading")}
                    </ProjectHeading>
                    <ProjectTechnologies>
                      <Technology className="react">React</Technology>
                      <Technology className="typescript">TypeScript</Technology>
                      <Technology className="styled-components">
                        Styled Components
                      </Technology>
                      <Technology className="mui">MUI</Technology>
                    </ProjectTechnologies>
                    <ProjectDescription>
                      {translation("projects-project-2-description")}
                    </ProjectDescription>
                  </ProjectContent>
                </Project>
                <Project>
                  <ProjectImageContainer>
                    <Image
                      layout="fill"
                      src="/images/pages/index/project-3-image.png"
                      alt="project-image-3"
                    />
                    <ProjectLink
                      href="https://github.com/BojanIstvancic/time-tracker"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p style={{ marginBottom: "10px" }}>
                        {translation("projects-project-3-link-text")}
                      </p>
                      <Image
                        src="/images/icons/github-white.svg"
                        alt="github"
                        width="20"
                        height="20"
                      />
                    </ProjectLink>
                  </ProjectImageContainer>
                  <ProjectContent>
                    <ProjectHeading>
                      {translation("projects-project-3-heading")}
                    </ProjectHeading>
                    <ProjectTechnologies>
                      <Technology className="react">React</Technology>
                      <Technology className="redux-toolkit">
                        Redux Toolkit
                      </Technology>
                      <Technology className="typescript">TypeScript</Technology>
                      <Technology className="firebase">FireBase</Technology>
                      <Technology className="mui">MUI</Technology>
                    </ProjectTechnologies>
                    <ProjectDescription>
                      {translation("projects-project-3-description")}
                    </ProjectDescription>
                  </ProjectContent>
                </Project>
              </SwiperWrapper>
            </ProjectsInner>
          </Container>
        </Projects>
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
                      src="/images/icons/linkedin.svg"
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
