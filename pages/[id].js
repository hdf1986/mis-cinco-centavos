import React from "react";
import Head from "next/head";
import styled from "@emotion/styled";

import api from "../api";

const Container = styled.div`
  padding: 12px;
`;

const Project = ({ id, project: initialData }) => {
  const [project, setProject] = React.useState(initialData);

  function handleDonate() {
    console.log("Donate");
  }

  React.useEffect(() => api.subscribe(id, setProject), [id]);

  return (
    <>
      <Head>
        <title>{project.title}</title>
        <meta content={project.title} name="og:title" />
        <meta content={project.description} name="og:description" />
      </Head>
      <Container>
        <Tag />
        {JSON.stringify(project)}
        <button onClick={handleDonate}>Donar</button>
        <hr />
        <table>
          <tbody>
            {project.donations.map(({ timestamp, ammount }) => (
              <tr key={timestamp}>
                <td>Donación de ${ammount}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
