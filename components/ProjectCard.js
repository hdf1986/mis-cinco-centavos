import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

import api from "../api";

import Button from "./Button";
import UserIcon from "./icons/User";
import TagIcon from "./icons/Tag";
import HeartIcon from "./icons/Heart";
import ProjectForm from "./ProjectForm";

const Card = styled.div`
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);
  background: white;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  background-position: center center;
  background-image: url(${({ src }) => src});
  background-size: cover;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const Title = styled.h1`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 20px;
  color: white;
  padding: 12px;
  filter: drop-shadow(2px 4px 6px black);
  margin: 0;
`;

const Amount = styled.div`
  color: white;
  padding: 12px;
  display: flex;
  align-items: baseline;
  filter: drop-shadow(2px 4px 6px black);

  .funded {
    font-size: 30px;
    font-weight: 800;
  }

  .goal {
    font-weight: 800;
  }

  span {
    margin: 0 6px;
  }
`;

const Progress = styled.div`
  height: 12px;
  background-color: gainsboro;

  .bar {
    height: 100%;
    width: ${({ amount }) => amount}%;
    background: hsl(${({ amount }) => amount}, 70%, 50%);
  }
`;

const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: orangered;
  margin: 6px 0 12px 0;

  svg path {
    fill: silver;
  }
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  text-transform: capitalize;

  span {
    margin-left: 6px;
  }
`;

const Body = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

const Description = styled.p`
  margin: 6px 0;
`;

const ProjectCard = ({ image, title, goal, category, donations, description, id, detail }) => {
  const [isFavourite, toggleFavourite] = React.useState(false);
  const [showModal, toggleModal] = React.useState(false);
  const funded = donations.reduce((acc, cur) => acc + cur.amount, 0);

  function handleDonate({ amount, name }) {
    api.donate(id, amount, name).catch(console.log);
  }

  return (
    <>
      <Card>
        <Header src={image}>
          <Title>
            {title}
            <HeartIcon active={isFavourite} onClick={() => toggleFavourite(!isFavourite)} />
          </Title>
          <Amount>
            <div className="funded">${funded}</div>
            <span> de </span>
            <div className="goal">${goal}</div>
          </Amount>
        </Header>
        <Progress amount={Math.min(100, (funded / goal) * 100)}>
          <div className="bar" />
        </Progress>
        <Body>
          <div>
            <Tags>
              <Tag>
                <TagIcon />
                <span>{category}</span>
              </Tag>
              <Tag>
                <UserIcon />
                <span>{donations.length}</span>
              </Tag>
            </Tags>
            <Description>{description}</Description>
          </div>
          <Footer>
            {!Boolean(detail) && (
              <Link key={id} href={id}>
                <Button backgroundColor="whitesmoke">Detalle</Button>
              </Link>
            )}
            <Button color="white" onClick={() => toggleModal(true)}>
              Donar
            </Button>
          </Footer>
        </Body>
      </Card>
      {showModal && <ProjectForm title={title} onClose={() => toggleModal(false)} onSubmit={handleDonate} />}
    </>
  );
};

export default ProjectCard;
