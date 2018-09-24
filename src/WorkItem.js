import React from "react";
import styled from "styled-components";
import { colors, poppins } from "./styleHelper";

const Base = styled.li`
  margin: 16px 0;
`;

const Category = styled.p`
  font-size: 12px;
  ${poppins}
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.5px;
  margin: 6px 0 2px;
  color: ${colors.green};
`;

const Title = styled.p`
  font-weight: 600;
`;

const WorkItem = props => {
  return (
    <Base>
      <img src="https://dummyimage.com/600x300/eee/ccc" alt={props.title} />
      <Category>{props.category}</Category>
      <Title>{props.title}</Title>
    </Base>
  );
};

export default WorkItem;
