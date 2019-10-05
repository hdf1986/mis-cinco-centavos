import Link from "next/link";
import styled from "@emotion/styled";
// import "typeface-roboto";
import User from "../components/icons/User"

import api from "../api";

const Titulo = styled.div`
display:flex;
  align-items: center;
  justify-content:space-between;
  font-size: 12px;
`;

const Tags = styled.div`
display:flex;
  align-items: center;
  justify-content:space-between;
`;

const Monto = styled.div`

`;

const Body = styled.div`

`;

const Grilla = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 12px;
`;

const Card = styled.div`
  padding: 12px;
border-radius: 10px;
background: lightgrey;
border: 1px solid black; 
`;

const Header = styled.div`
  margin-bottom: 12px;
  
`;

var buttonStyle = {
  margin: "10px 10px 10px 0"
};

const Index = ({ projects }) => {

  function handleClick() {
    alert("click button");

  }

  // return JSON.stringify(projects);
  return <Grilla>
    {projects.map(({ id, ...project }) => (

      //cargar la imagen de background
      <Card>
        <Header>
          <Titulo>
            <h1>{project.title}</h1>
            #icono
          </Titulo>
          <h2>{project.subtitle}</h2>

          <Monto>
            {project.funded} de {project.goal}
          </Monto>

          {/*componente progress*/}<User />

        </Header>

        <Body>
          <Tags>
            <span>
              {project.category}
            </span>
            <span>
            {project.donations.length}
            </span>
          </Tags>

          <span>Descripcion</span>
          <p>{project.text}</p>
          <Link key={id} href={id}>
            <button
              className="btn btn-default"
              style={buttonStyle}
              onClick={handleClick}>Mas INFO +
            </button>
          </Link>
        </Body>

      </Card>
    ))}
  </Grilla>;
};


/*Index.getInitialProps = async () => {
  let item = {
    "id": 1,
    "title": "titulo",
    "images": [
      "https://dummyimage.com/600x400/000/fff", "https://dummyimage.com/600x400/ff00ff/fff"
    ],
    "monto": "$900",
    "total": "$5.000",
    "subtitle": "subtitulo",
    "text": "lorem lorem",
    "category": "Categoria 1",
    "members": 13,
    "time": "7 dias"
  };
  return {
    projects: [item, item]
  };
};*/

Index.getInitialProps = async () => {
  return {
    projects: await api.list()
  };
};

export default Index;