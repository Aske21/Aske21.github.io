import React from "react";
import { useLocation } from "react-router-dom";
import TerminalCommand from "../../components/terminal-command";
import { ErrorText, BackLink } from "./style";

const NotFound: React.FC = () => {
  const location = useLocation();

  return (
    <TerminalCommand command={location.pathname}>
      <ErrorText>bash: {location.pathname}: command not found</ErrorText>
      <BackLink to="/">&larr; cd ~</BackLink>
    </TerminalCommand>
  );
};

export default NotFound;
