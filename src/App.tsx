import React from 'react';

import Layout from './components/Layout';
import Header from './components/Header';
import Project from './components/Project';
import Section from './components/Section';

import projectData from './data/projects.json';

const App: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Section
        title="프로젝트"
        desc=""
      >
        {projectData.map(project => (
          <Project project={project} />
        ))}
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
