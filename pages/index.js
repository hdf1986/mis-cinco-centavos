import Link from "next/link";
import styled from "@emotion/styled";
import api from "../api";
// import "typeface-roboto";
import User from "../components/icons/User";
import Tag from "../components/icons/Tag";
import Heart from "../components/icons/Heart";

const Grilla = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 12px;
`;

const Card = styled.div`
  border-radius: 10px;
  border: 1px solid black; 
`;

const Header = styled.div`
  margin-bottom: 12px;
  background-position: center center;
  background-image: url(${({ src }) => src});
  background-size: cover;
  min-height: 300px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
`;


const Titulo = styled.div`
  display:flex;
  align-items: center;
  justify-content:space-between;
  font-size: 10px;
  color:white;
  text-shadow: 1px 1px 2px rgba(150, 150, 150, 0.99);
  padding: 12px;
`;

const Monto = styled.div`
  color: white;
  padding: 12px;
  display:flex;
  align-items: flex-end;
`;

const Tags = styled.div`
  display:flex;
  align-items: center;
  justify-content:space-between;
  color:black;
`;

const Body = styled.div`
  padding: 12px;
`;

var buttonStyle = {
  margin: "10px 10px 10px 0",
  width: 200
};

var fundedStyle = {
  fontSize: 30
};

var goalStyle = {
  fontSize: 20
};

var h1Style = {
  padding: 0,
  margin: 0
};

const Index = ({ projects }) => {

  function handleDonate(id) {
    api.donate(id, 10).catch(console.log);
  }

  function handleClick() {
    console.log('click')
  }

  // return JSON.stringify(projects);
  return <Grilla>
    {projects.map(({ id, ...project }) => (

      //cargar la imagen de background
      <Card>
        <Header src={project.image}>
          <Titulo>
            <h1 style={h1Style}>{project.title}</h1>
            <iconContainer>
              <Heart/>
            </iconContainer>
          </Titulo>
          <h2>{project.subtitle}</h2>

          <Monto>
            <span style={fundedStyle}>${project.funded}</span>
            <span style={goalStyle}>&nbsp; de ${project.goal}</span>
          </Monto>

          {/*componente progress*/}

        </Header>

        <Body>
          <Tags>
            <span>
              <Tag/>
              {project.category}
            </span>
            <span>
              <User/>
              {project.donations.length}
            </span>
          </Tags>

          <span>Descripcion</span>
          <p>{project.description}</p>
          <Link key={id} href={id}>
            <button
              className="btn btn-default"
              style={buttonStyle}
              onClick={handleClick}>Detalle
            </button>
          </Link>
          <Link key={id}>
            <button
              className="btn btn-default"
              style={buttonStyle}
              onClick={() => handleDonate(id)}>Donar
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