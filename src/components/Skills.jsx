/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

export default function Skills({ text, bgColor }) {
  return <Skill style={{ backgroundColor: bgColor }}>{text}</Skill>;
}

const Skill = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
  max-width: 130px;
  font-weight: 800;
  font-size: 1.2rem;
  padding: 5px 12px;
  border-radius: 8px;
`;
