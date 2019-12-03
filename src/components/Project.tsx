import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Name = styled.h2``;

const Info = styled.div``;

const Detail = styled.span``;

const Desc = styled.p``;

interface IProject {
  name: string;
  part: string;
  event: string;
  date: string;
  desc: string;
}

interface IProjectProps {
  project: IProject;
}

export default ({ project }: IProjectProps) => {
  const { name, part, event, date, desc }: IProject = project;

  return (
    <Container>
      <Name>{name}</Name>
      <Info>
        <Detail>{part}</Detail>
        <Detail>{event}</Detail>
        <Detail>{date}</Detail>
      </Info>
      <Desc>{desc}</Desc>
    </Container>
  );
};
