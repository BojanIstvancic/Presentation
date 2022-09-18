import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

interface NavigationProps {}

const StyledNavigation = styled.div`
  position: relative;
  display: none;
  align-items: center;
  justify-content: center;
  margin-top: 16px;

  @media (min-width: 1200px) {
    display: flex;
  }

  &:after,
  &:before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 50%;
    width: 100%;
    height: 2px;
    background-color: var(--white);
  }

  &:before {
    left: 0;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }

  &:after {
    right: 0;
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
`;
const NavigationLink = styled.a`
  position: relative;
  margin: 0 20px;
  color: var(--white);
  cursor: pointer;

  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: calc(100% + 3px);
    width: 0;
    height: 3px;
    background-color: var(--yellow);
    transition: all 400ms ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

const Navigation: React.FC<NavigationProps> = ({}) => {
  const translation = useTranslations("navigation");
  const router = useRouter();
  const locale = router.locale;

  return (
    <StyledNavigation>
      <Link href="#home" passHref>
        <NavigationLink>{translation("home")}</NavigationLink>
      </Link>
      <Link href="#about-me" passHref>
        <NavigationLink>{translation("about-me")}</NavigationLink>
      </Link>
      <Link href="#development" passHref>
        <NavigationLink>{translation("development")}</NavigationLink>
      </Link>
      <Link href="#projects" passHref>
        <NavigationLink>{translation("projects")}</NavigationLink>
      </Link>
      <Link href="#contact" passHref>
        <NavigationLink>{translation("contact")}</NavigationLink>
      </Link>
      {locale === "sr" && (
        <Link href="#" locale="en">
          <NavigationLink>en</NavigationLink>
        </Link>
      )}
      {locale === "en" && (
        <Link href="#" locale="sr">
          <NavigationLink>sr</NavigationLink>
        </Link>
      )}
    </StyledNavigation>
  );
};

export default Navigation;
