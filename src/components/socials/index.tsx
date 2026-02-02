import React from "react";
import { SocialLink } from "./style";

const Socials: React.FC = () => {
  return (
    <>
      <SocialLink href="https://github.com/Aske21" target="_blank" rel="noopener noreferrer">
        GitHub
      </SocialLink>
      {" • "}
      <SocialLink href="https://www.linkedin.com/in/asim-veledarevic/" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </SocialLink>
    </>
  );
};

export default Socials;
