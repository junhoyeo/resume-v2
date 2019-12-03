import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 2rem 0;
`;

const Info = styled.div`
  padding-bottom: 0.8rem;
  margin-bottom: 0.8rem;
  border-bottom: 1.5px solid #868e96;
`;

const Title = styled.h1`
  font-size: 2.2rem;
`;

const Desc = styled.p`
  margin-top: 0.5rem;
`;

interface ISectionProps {
  title?: string;
  desc?: string;
  children?: React.ReactElement | React.ReactElement[];
}

export default ({ title, desc, children }: ISectionProps) => {
  return (
    <Container>
      <Info>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </Info>
      {children}
    </Container>
  );
};
