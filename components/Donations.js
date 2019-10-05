import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  margin-top: 12px;
`;

const Donation = styled.div`
  display: flex;
  align-items: center
  justify-content: space-around;
  padding: 12px;
  border-radius: 4px;

  &:nth-of-type(odd) {
    background: whitesmoke;
  }
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 12px;
`;

const Avatar = styled.div`
  background-image: url(${({ src }) => src});
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-size: contain;
  background-position: center;
`;

const Donations = ({ donations }) => (
  <Container>
    {donations.map(donation => (
      <Donation>
        <Avatar src={`http://lorempixel.com/200/200/people/?id=${donation.id}`} />
        <Details>
          {donation.name || "Anónimo"} donó ${donation.amount}
        </Details>
      </Donation>
    ))}
  </Container>
);
export default Donations;
