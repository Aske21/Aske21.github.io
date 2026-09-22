import React from "react";
import { useParams } from "react-router-dom";
import TerminalCommand from "../../components/terminal-command";
import { getProjectBySlug } from "../../components/portfolio/projects";
import { getLanguageColor } from "../../utils/github/languageColors";
import { usePageMeta } from "../../utils/seo/usePageMeta";
import {
  ProjectInfo,
  ProjectMeta,
  LanguageDot,
  ProjectDescription,
  EmptyState,
  RepoLink,
  ScreenshotGrid,
  ScreenshotLink,
  ScreenshotImage,
  LiveDot,
  LiveLink,
  NotFoundText,
  BackLink,
} from "./style";

const ProjectPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  usePageMeta({
    title: project
      ? `${project.name} — Asim Veledarevic`
      : "Project not found — Asim Veledarevic",
    description: project
      ? `${project.description} — a project by Asim Veledarevic.`
      : "This project could not be found.",
    path: `/projects/${slug ?? ""}`,
  });

  if (!project) {
    return (
      <>
        <TerminalCommand command={`cat projects/${slug}.txt`}>
          <NotFoundText>cat: projects/{slug}.txt: No such file or directory</NotFoundText>
        </TerminalCommand>
        <TerminalCommand command="cd ..">
          <BackLink to="/">&larr; back home</BackLink>
        </TerminalCommand>
      </>
    );
  }

  return (
    <>
      <TerminalCommand command={`cat projects/${project.slug}.txt`}>
        <ProjectInfo>
          <ProjectMeta>
            <LanguageDot $color={getLanguageColor(project.language)} />
            {project.language}
          </ProjectMeta>
          <ProjectDescription>{project.description}</ProjectDescription>
          <RepoLink href={project.htmlUrl} target="_blank" rel="noopener noreferrer">
            View on GitHub &rarr;
          </RepoLink>
        </ProjectInfo>
      </TerminalCommand>

      <TerminalCommand command={`ls screenshots/${project.slug}/`}>
        {project.images.length === 0 ? (
          <EmptyState>No screenshots yet — check back soon.</EmptyState>
        ) : (
          <ScreenshotGrid>
            {project.images.map((src) => (
              <ScreenshotLink key={src} href={src} target="_blank" rel="noopener noreferrer">
                <ScreenshotImage src={src} alt={`${project.name} screenshot`} loading="lazy" />
              </ScreenshotLink>
            ))}
          </ScreenshotGrid>
        )}
      </TerminalCommand>

      <TerminalCommand command="echo $LIVE_URL">
        {project.liveUrl ? (
          <LiveLink href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <LiveDot />
            {project.liveUrl}
          </LiveLink>
        ) : (
          <EmptyState>Not deployed yet — check back soon.</EmptyState>
        )}
      </TerminalCommand>

      <TerminalCommand command="cd ..">
        <BackLink to="/">&larr; back home</BackLink>
      </TerminalCommand>
    </>
  );
};

export default ProjectPage;
