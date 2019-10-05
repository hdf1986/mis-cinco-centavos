import React from "react";
import Head from "next/head";
import styled from "@emotion/styled";

import api from "../api";
import ProjectCard from "../components/ProjectCard";
import Donations from "../components/Donations";
import ShareButtons from "../components/ShareButtons";

const Container = styled.div`
  padding: 12px;
`;

const Project = ({ id, project: initialData }) => {
  const [project, setProject] = React.useState(initialData);

  React.useEffect(() => api.subscribe.project(id, setProject), [id]);

  return (
    <>
      <Head>
        <title>{project.title}</title>
        <meta content={project.title} name="og:title" />
        <meta content={project.description} name="og:description" />
      </Head>
      <Container>
        <ProjectCard {...project} detail={true} />
        <ShareButtons url="http://google.com" />
        <Donations donations={project.donations} />
      </Container>
    </>
  );
};

Project.getInitialProps = async ({ query }) => {
  return {
    id: query.id,
    project: await api.get(query.id),
  };
};

export default Project;
