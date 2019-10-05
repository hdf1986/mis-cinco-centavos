import React from "react";
import styled from "@emotion/styled";

import Facebook from "./icons/Facebook";
import Twitter from "./icons/Twitter";
import Whatsapp from "./icons/Whatsapp";

const ShareContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 15px;
`;

const ShareButtons = () => {
  return (
    <ShareContainer>
      <Facebook />
      <Twitter />
      <Whatsapp />
    </ShareContainer>
  );
};

export default ShareButtons;
