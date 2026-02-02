import React from "react";
import TerminalCommand from "../terminal-command";
import { InterestsList, InterestItem, InterestsHeading } from "./style";

const Interests: React.FC = () => {
  return (
    <TerminalCommand command="cat skills.txt">
      <InterestsList>
        <InterestsHeading>Skills</InterestsHeading>
        <InterestItem>• Next.js</InterestItem>
        <InterestItem>• React.js</InterestItem>
        <InterestItem>• Node.js</InterestItem>
        <InterestItem>• PHP</InterestItem>
        <InterestItem>• Python</InterestItem>
      </InterestsList>
    </TerminalCommand>
  );
};

export default Interests;
