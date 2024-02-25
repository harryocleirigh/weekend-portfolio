import React from "react";
import styled from "styled-components";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;

const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: black;
  line-height: 1.5;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Degree = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.5;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  line-height: 1.5;

  @media only screen and (max-width: 768px) {
    font-size: 12px; // Increased from 10px to 12px
  }
`;

const Grade = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  line-height: 1.5;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  text-align: justify;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
  line-height: 1.5;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Span = styled.div``;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 100%;
  max-width: 720px;
  background-color: ${({ theme }) => theme.bg};
  border: 1px solid ${({ theme }) => theme.lightBorder};
  border-radius: 16px;
  padding: 18px 36px;
  color: ${({ theme }) => theme.text_primary};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out, border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 4px;
  &:hover {
    transform: scale(1.02);
    border-color: #0077B5;
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    max-width: 90%;
  }
`;

const EducationCard = ({ education }) => {
  return (
        <Card>
          <Top style={{marginBottom: '4px'}}>
            <Image src={education.img} />
            <Body>
              <Name>{education.school}</Name>
              <Degree>{education.degree}</Degree>
              <Date>{education.date}</Date>
            </Body>
          </Top>
          <Grade>
            <b>Grade : </b>
            {education.grade}
          </Grade>
          <Description>
            <Span>{education.desc}</Span>
            <Span>{education.desc1}</Span>
          </Description>
        </Card>
  );
};

export default EducationCard;
