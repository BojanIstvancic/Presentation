import { useTranslations } from "next-intl";
import styled from "styled-components";
import Container from "./Container";

const FooterContainer = styled.div`
  background: var(--dark-gray);
`;
const FooterInner = styled.div`
  padding: 16px;
`;
const FooterItem = styled.p`
  font-size: 14px;
  color: var(--white);
  text-align: center;
  transition: color 500ms ease;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  &:last-child:hover {
    color: var(--blue);
  }
`;

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  const translation = useTranslations("footer");
  return (
    <FooterContainer>
      <Container>
        <FooterInner>
          <FooterItem>{translation("label-1")}</FooterItem>
          <FooterItem>{translation("label-2")}</FooterItem>
          <FooterItem style={{ opacity: "0.8" }}>
            <a href="https://www.freepik.com/" target="_blank" rel="noreferrer">
              {translation("label-3")}
            </a>
          </FooterItem>
        </FooterInner>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
