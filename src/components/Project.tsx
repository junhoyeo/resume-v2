import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 2rem 0;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.span`
  font-size: 0.98rem;
  margin-left: 0.5rem;
`;

const Info = styled.div`
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #495057;
`;

const Detail = styled.span`
  font-size: 1.1rem;
  position: relative;
  padding-right: 0.4rem;
  margin-right: 0.5rem;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -2px;
    transform: translateY(-50%);
    width: 1.5px;
    height: 1rem;
    background: #495057;
  }
`;

const Desc = styled.p`
  font-size: 1rem;
`;

interface IProject {
  title: string;
  subtitle?: string;
  part: string;
  event: string;
  date: string;
  desc: string;
}

interface IProjectProps {
  project: IProject;
}

export default ({ project }: IProjectProps) => {
  const { title, subtitle, part, event, date, desc }: IProject = project;

  return (
    <Container>
      <Title>
        {title}
        <Subtitle>{subtitle}</Subtitle>
      </Title>
      <Info>
        <Detail>{part}</Detail>
        <Detail>{event}</Detail>
        <Detail>{date}</Detail>
      </Info>
      <Desc>{desc}</Desc>
    </Container>
  );
};
