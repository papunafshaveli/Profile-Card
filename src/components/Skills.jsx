/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

export default function Skills({ skillsObj }) {
  return (
    <Skill style={{ backgroundColor: skillsObj.color }}>
      <span>{skillsObj.skill}</span>{" "}
      <span>
        {skillsObj.level === "starter" && "👶"}
        {skillsObj.level === "intermediate" && "👍"}
        {skillsObj.level === "advanced" && "💪"}
      </span>
    </Skill>
  );
}

const Skill = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: blue;
  max-width: 130px;
  font-weight: 800;
  font-size: 1.2rem;
  padding: 7px 12px;
  border-radius: 8px;
`;
