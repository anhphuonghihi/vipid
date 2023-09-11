import styled from "styled-components";
import React from "react";
import { css } from "@emotion/react";
const ButtonStyle = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.$primary &&
    css`
      background: #bf4f74;
      color: white;
    `}
`;

const Button = ({ title, primary }) => {
  return <ButtonStyle primary>{title}</ButtonStyle>;
};

export default Button;
