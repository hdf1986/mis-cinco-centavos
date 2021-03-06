import React from "react";
import styled from "@emotion/styled";

import api from "../api";
import ProjectCard from "../components/ProjectCard";

const Grilla = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 12px;
  padding: 12px;
`;

const Index = ({ projects: initialData }) => {
  const [projects, setProjects] = React.useState(initialData);

  React.useEffect(() => api.subscribe.projects(setProjects), []);

  return (
    <Grilla>
      {projects.map(project => (
        <ProjectCard key={project.id} {...project} detail={false} />
      ))}
    </Grilla>
  );
};

Index.getInitialProps = async () => {
  return {
    projects: await api.list(),
  };
};

export default Index;
