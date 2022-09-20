import styled from "styled-components";

const AccordionWrapper = styled.div``;
const AccordionItemStyled = styled.div`
  padding-left: 25px;

  &:not(:last-child) {
    padding-bottom: 40px;
  }
`;
const AccordionItemTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
`;
const AccordionItemHeading = styled.h4`
  font-size: 18px;
  opacity: 0.8;
`;
const AccordionItemSubheading = styled.h4`
  font-size: 18px;
  margin-bottom: 10px;
  opacity: 0.4;
`;
const AccordionItemDescription = styled.p`
  line-height: 1.4;
  font-size: 16px;
`;
const AccordionBar = styled.div``;
const AccordionCircle = styled.div``;

export interface AccordionItemProps {
  id: number;
  item: {
    title: string;
    heading: string;
    subheading: string;
    description: string;
  };
}

const AccordionItem: React.FC<AccordionItemProps> = ({ id, item }) => {
  return (
    <AccordionItemStyled>
      <AccordionItemTitle>{item.title}</AccordionItemTitle>
      <AccordionItemHeading>{item.heading}</AccordionItemHeading>
      <AccordionItemSubheading>{item.subheading}</AccordionItemSubheading>
      <AccordionItemDescription>{item.description}</AccordionItemDescription>
      <AccordionBar>
        <AccordionCircle />
      </AccordionBar>
    </AccordionItemStyled>
  );
};

interface AccordionProps {}

const Accordion: React.FC<AccordionProps> = ({}) => {
  return (
    <AccordionWrapper>
      <p>postavlka</p>
    </AccordionWrapper>
  );
};

export default Accordion;
