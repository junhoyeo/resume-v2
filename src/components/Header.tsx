import React from 'react';
import styled from 'styled-components';

import useConstant from '../utils/useConstant';

const Container = styled.div`
  display: flex;
`;

const Profile = styled.div`
  display: flex;
`;

const ProfileImage = styled.img`
  height: 8.5rem;
  width: 8.5rem;
  border-radius: 4px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  justify-content: space-between;
`;

const Names = styled.div`
  display: flex;
  flex-direction: column;
`;

const KorName = styled.h1`
  font-size: 3.5rem;
`;

const EngName = styled.h2`
  font-size: 1.3rem;
  margin-top: 0.5rem;
`;

const Desc = styled.p``;

const contractData = [
  {
    name: 'github',
    icon: 'fa-github',
    href: 'https://github.com/junhoyeo',
  },
  {
    name: 'facebook',
    icon: 'fa-facebook',
    href: 'https://www.facebook.com/juno3704',
  },
];

interface IContract {
  name: string;
  icon: string;
  href: string;
}

interface IContractList {
  contracts: IContract[];
}

const ContractList = ({ contracts }: IContractList) => {
  const ListContainer = useConstant(() => styled.div``);

  const Icon = useConstant(() => styled.i`
    font-size: 2rem;
    color: #868e96;
    margin-left: 0.3rem;
    transition: color 0.2s linear;

    &:hover,
    &:focus {
      color: #adb5bd;
    }
  `);

  return (
    <ListContainer>
      {contracts.map((contract: IContract, idx: number) => (
        <a
          href={contract.href}
          target="_blank"
          rel="noopener noreferrer"
          key={`contract-${idx}`}
        >
          <Icon className={`fab ${contract.icon}`} />
        </a>
      ))}
    </ListContainer>
  );
}

export default () => (
  <Container>
    <Profile>
      <ProfileImage src="https://github.com/junhoyeo.png" />
      <Info>
        <Names>
          <KorName>여준호</KorName>
          <EngName>Junho Yeo</EngName>
        </Names>
        <Desc>세상에 기여하는, 트렌디한 개발자를 꿈꿉니다.</Desc>
      </Info>
    </Profile>
    <ContractList contracts={contractData} />
  </Container>
);
