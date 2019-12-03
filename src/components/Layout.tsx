import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 2.5rem 0;
  width: 70%;

  @media (max-width: 1000px) {
    padding: 2.5rem 0;
    width: 80%;
  }
`;

interface ILayoutProps {
  children?: React.ReactElement | React.ReactElement[];
}

export default ({ children }: ILayoutProps) => {
  return (
    <Container>
      <Wrapper>
        {children}
      </Wrapper>
    </Container>
  );
};
