import Image from "next/image";
import styled from "styled-components";
import Navigation from "./Navigation";

const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: var(--blue);
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  padding: 24px;
  overflow: hidden;

  @media (min-width: 1200px) {
    width: 1136px;
    flex-direction: column;
    padding: 16px;
  }
`;
const Logo = styled.img`
  height: 32px;

  @media (min-width: 800px) {
    height: 40px;
  }
`;
const Hamburger = styled.img`
  cursor: pointer;

  @media (min-width: 1200px) {
    display: none;
  }
`;

interface HeaderProps {
  setDisplayMobileNav: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setDisplayMobileNav }) => {
  return (
    <StyledHeader>
      <Container>
        <a href="#home">
          <Logo src="/images/logos/logo.svg" alt="logo" />
        </a>
        <Hamburger
          src="/images/icons/hamburger.svg"
          alt="hamburger"
          onClick={() => setDisplayMobileNav(true)}
        />
        <Navigation />
      </Container>
    </StyledHeader>
  );
};

export default Header;
