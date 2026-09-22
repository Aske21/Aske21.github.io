import React from "react";
import { useLocation } from "react-router-dom";
import TerminalCommand from "../../components/terminal-command";
import { usePageMeta } from "../../utils/seo/usePageMeta";
import { ErrorText, BackLink } from "./style";

const NotFound: React.FC = () => {
  const location = useLocation();

  usePageMeta({
    title: "404 — Asim Veledarevic",
    description: "This page could not be found.",
    path: location.pathname,
  });

  return (
    <TerminalCommand command={location.pathname}>
      <ErrorText>bash: {location.pathname}: command not found</ErrorText>
      <BackLink to="/">&larr; cd ~</BackLink>
    </TerminalCommand>
  );
};

export default NotFound;
