import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";

const StyledNav = styled.div<{ displayNav: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  background: var(--blue);
  transition: all 500ms ease;

  ${({ displayNav }) =>
    displayNav &&
    css`
      height: 100%;
      z-index: 999;
    `}
`;
const NavContent = styled.div`
  padding: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const NavLink = styled.a`
  position: relative;
  width: 100%;
  padding: 20px 0;
  color: var(--white);
  cursor: pointer;
  text-align: center;

  &:not(:last-child) {
    border-bottom: 1px solid var(--white);
  }
`;
const NavCloseButton = styled.div`
  width: 100%;
  text-align: right;
  font-size: 30px;
  color: var(--white);
`;

interface MobileNavProps {
  setDisplayMobileNav: (value: boolean) => void;
  displayMobileNav: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({
  setDisplayMobileNav,
  displayMobileNav,
}) => {
  const translation = useTranslations("navigation");
  const router = useRouter();
  const locale = router.locale;
  return (
    <StyledNav displayNav={displayMobileNav}>
      <NavContent>
        <NavCloseButton onClick={() => setDisplayMobileNav(false)}>
          X
        </NavCloseButton>
        <Link href="#home" passHref>
          <NavLink onClick={() => setDisplayMobileNav(false)}>
            {translation("home")}
          </NavLink>
        </Link>
        <Link href="#about-me" passHref>
          <NavLink onClick={() => setDisplayMobileNav(false)}>
            {translation("about-me")}
          </NavLink>
        </Link>
        <Link href="#development" passHref>
          <NavLink onClick={() => setDisplayMobileNav(false)}>
            {translation("development")}
          </NavLink>
        </Link>
        <Link href="#projects" passHref>
          <NavLink onClick={() => setDisplayMobileNav(false)}>
            {translation("projects")}
          </NavLink>
        </Link>
        <Link href="#contact" passHref>
          <NavLink onClick={() => setDisplayMobileNav(false)}>
            {translation("contact")}
          </NavLink>
        </Link>
        {locale === "sr" && (
          <Link href="#" locale="en">
            <NavLink>en</NavLink>
          </Link>
        )}
        {locale === "en" && (
          <Link href="#" locale="sr">
            <NavLink>sr</NavLink>
          </Link>
        )}
      </NavContent>
    </StyledNav>
  );
};

export default MobileNav;
