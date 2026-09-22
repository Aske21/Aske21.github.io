import React from "react";
import TerminalCommand from "../terminal-command";
import { getLanguageColor } from "../../utils/github/languageColors";
import { projects } from "./projects";
import {
  PortfolioHeading,
  RepoGrid,
  RepoCard,
  RepoName,
  RepoMeta,
  LanguageDot,
  ViewAllLink,
} from "./style";

const GITHUB_PROFILE_URL = "https://github.com/Aske21?tab=repositories";

const Portfolio: React.FC = () => {
  return (
    <TerminalCommand command="ls projects/">
      <PortfolioHeading>Featured Projects</PortfolioHeading>
      <RepoGrid>
        {projects.map((project, index) => (
          <RepoCard
            key={project.slug}
            to={`/projects/${project.slug}`}
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <RepoName>{project.name}</RepoName>
            <RepoMeta>
              <span>
                <LanguageDot $color={getLanguageColor(project.language)} />
                {project.language}
              </span>
            </RepoMeta>
          </RepoCard>
        ))}
      </RepoGrid>
      <ViewAllLink href={GITHUB_PROFILE_URL} target="_blank" rel="noopener noreferrer">
        View all repositories &rarr;
      </ViewAllLink>
    </TerminalCommand>
  );
};

export default Portfolio;
