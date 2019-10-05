import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

import api from "../api";

import UserIcon from "./icons/User";
import TagIcon from "./icons/Tag";
import HeartIcon from "./icons/Heart";

const Card = styled.div`
  border-radius: 10px;
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
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
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

const Progress = styled.div`
  height: 25px;
  background-color: whitesmoke;

  .bar {
    height: 100%;
    width: ${({ amount }) => amount}%;
    background: hsl(${({ amount }) => amount}, 70%, 50%);
  }
`;

const Content = styled.div``;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

const Button = styled.button`
  padding: 12px;
  color: white;
  color: ${({ color = "black" }) => color};
  background-color: ${({ backgroundColor = "orangered" }) => backgroundColor};
  border: none;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;

  :not(:first-child) {
    margin-left: 12px;
  }
`;

const Description = styled.p`
  margin: 6px 0;
`;

const ProjectCard = ({ image, title, funded, goal, category, donations, description, id }) => {
  const [isFavourite, setFavourite] = React.useState(false);

  function handleDonate() {
    api.donate(id, 10).catch(console.log);
  }
  console.log(donations)
  return (
    <Card>
      <Header src={image}>
        <Title>
          {title}
          <HeartIcon active={isFavourite} onClick={() => setFavourite(!isFavourite)} />
        </Title>
        <Amount>
          <div className="funded">${donations.reduce((acc, cur) => acc + cur.amount, 0)}</div>
          <span> de </span>
          <div className="goal">${goal}</div>
        </Amount>
      </Header>
      <Progress amount={(funded / goal) * 100}>
        <div className="bar" />
      </Progress>
      <Body>
        <Content>
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
        </Content>
        <Footer>
          <Link key={id} href={id}>
            <Button backgroundColor="whitesmoke">Detalle</Button>
          </Link>
          <Button color="white" onClick={handleDonate}>
            Donar
          </Button>
        </Footer>
      </Body>
    </Card>
  );
};

export default ProjectCard;
