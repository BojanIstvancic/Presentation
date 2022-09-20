import styled from "styled-components";

const AccordionWrapper = styled.div`
  margin-bottom: 40px;
`;
const AccordionBar = styled.div`
  position: absolute;
  top: 5px;
  left: 10px;
  bottom: -5px;

  border-right: 2px solid var(--gray);
`;
const AccordionItemStyled = styled.div`
  position: relative;
  padding-left: 40px;

  @media (min-width: 800px) {
    padding-left: 50px;
  }

  &:not(:last-child) {
    padding-bottom: 40px;
  }

  &:last-child {
    ${AccordionBar} {
      border-color: var(--transparent);
    }
  }
`;
const AccordionItemTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;

  @media (min-width: 800px) {
    font-size: 30px;
  }
`;
const AccordionItemHeading = styled.h4`
  font-size: 18px;
  opacity: 0.8;

  @media (min-width: 800px) {
    font-size: 24px;
  }
`;
const AccordionItemSubheading = styled.h4`
  font-size: 18px;
  margin-bottom: 10px;
  opacity: 0.4;

  @media (min-width: 800px) {
    font-size: 24px;
  }
`;
const AccordionItemDescription = styled.p`
  line-height: 1.4;
  font-size: 16px;

  @media (min-width: 800px) {
    font-size: 20px;
  }
`;
const AccordionCircle = styled.div`
  position: absolute;
  top: 0;
  width: 20px;
  height: 20px;

  border-radius: 50%;
  background: var(--blue);
  transform: translateX(-50%);

  @media (min-width: 800px) {
    width: 25px;
    height: 25px;
  }
`;

export interface AccordionItemProps {
  title: string;
  heading: string;
  subheading: string;
  description: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  heading,
  subheading,
  description,
}) => {
  return (
    <AccordionItemStyled>
      <AccordionItemTitle>{title}</AccordionItemTitle>
      <AccordionItemHeading>{heading}</AccordionItemHeading>
      <AccordionItemSubheading>{subheading}</AccordionItemSubheading>
      <AccordionItemDescription>{description}</AccordionItemDescription>
      <AccordionBar>
        <AccordionCircle />
      </AccordionBar>
    </AccordionItemStyled>
  );
};

interface AccordionProps {
  items: [
    {
      title: string;
      heading: string;
      subheading: string;
      description: string;
    }
  ];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <AccordionWrapper>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          heading={item.heading}
          subheading={item.subheading}
          description={item.description}
        />
      ))}
    </AccordionWrapper>
  );
};

export default Accordion;
