import React from 'react';

import Layout from './components/Layout';
import Header from './components/Header';
import Section from './components/Section';

const App: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Section
        title="프로젝트"
        desc=""
      >
      </Section>
      <Section
        title="해킹"
        desc=""
      >
      </Section>
      <Section
        title="아웃소싱"
        desc=""
      >
      </Section>
    </Layout>
  );
}

export default App;
