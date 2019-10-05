import React from "react";
import styled from "@emotion/styled";
import Facebook from "./icons/Facebook";
import Twitter from "./icons/Twitter";
import Whatsapp from "./icons/Whatsapp";

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

const ShareContainer = styled.div`
display:flex;
align-items: center;
justify-content: space-around;
padding-left: 30px;
padding-right: 30px;
margin-top: 15px;
`;


const ShareButtons = ({ url: url }) => {

  function handleDonate() {
    api.donate(id, 10).catch(console.log);
  }

  return (
    <ShareContainer>
      <Facebook/>
      <Twitter/>
      <Whatsapp/>
    </ShareContainer>
  );
};

export default ShareButtons;
