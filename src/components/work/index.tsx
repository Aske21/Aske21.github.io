import React from "react";
import { WorkHeading, WorkParagraph, WorkWrapper } from "./styled";

const Work: React.FC = () => {
  return (
    <WorkWrapper>
      <WorkHeading>About</WorkHeading>
      <WorkParagraph>
        A frontend engineer who thrives in dynamic startup environments. I'm
        passionate about crafting pixel-perfect digital experiences, always
        chasing the details. Currently navigating the final stages of
        university, I'm simultaneously working on exciting products. Let's
        connect and explore the fascinating world of frontend development!
      </WorkParagraph>
    </WorkWrapper>
  );
};

export default Work;
