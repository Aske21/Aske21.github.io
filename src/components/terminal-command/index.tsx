import React from "react";
import { TerminalBlock, CommandLine, CommandOutput, Prompt } from "./style";

interface TerminalCommandProps {
  command: string;
  children: React.ReactNode;
  showCursor?: boolean;
}

const TerminalCommand: React.FC<TerminalCommandProps> = ({
  command,
  children,
  showCursor = false,
}) => {
  return (
    <TerminalBlock>
      <CommandLine>
        <Prompt>aske21@github</Prompt> <span>➜</span> <span>~</span>{" "}
        <span>$</span> {command}
      </CommandLine>
      <CommandOutput showCursor={showCursor}>{children}</CommandOutput>
    </TerminalBlock>
  );
};

export default TerminalCommand;
