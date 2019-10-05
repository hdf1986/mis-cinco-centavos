import React from "react";
import styled from "@emotion/styled";

import Facebook from "./icons/Facebook";
import Twitter from "./icons/Twitter";
import Whatsapp from "./icons/Whatsapp";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 12px;
`;

const ShareButtons = () => {
  return (
    <Container>
      <Facebook />
      <Twitter />
      <Whatsapp />
    </Container>
  );
};

export default ShareButtons;
