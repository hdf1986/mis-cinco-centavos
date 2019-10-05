import styled from "@emotion/styled";

const Button = styled.button`
  padding: 12px;
  color: white;
  color: ${({ color = "black" }) => color};
  background-color: ${({ backgroundColor = "orangered" }) => backgroundColor};
  border: none;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 1px;

  :not(:last-child) {
    margin-right: 12px;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export default Button;
