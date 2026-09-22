import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const ProjectInfo = styled.div`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.body};
  line-height: 1.8;
`;

export const ProjectMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${(props) => props.theme.colors.subtext0};
  font-size: 0.9em;
  margin-bottom: 16px;
`;

export const LanguageDot = styled.span<{ $color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => props.$color};
`;

export const ProjectDescription = styled.p`
  margin-bottom: 16px;
`;

export const EmptyState = styled.p`
  color: ${(props) => props.theme.colors.subtext0};
  font-style: italic;
`;

export const RepoLink = styled.a`
  color: ${(props) => props.theme.colors.blue};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.lavender};
    text-decoration: underline;
  }
`;

export const ScreenshotGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px;
`;

export const ScreenshotLink = styled.a`
  display: block;
  border-radius: ${(props) => props.theme.borderRadius.md};
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.colors.light};
  transition: transform 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: scale(1.03);
    border-color: ${(props) => props.theme.colors.mauve};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;

export const ScreenshotImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(166, 227, 161, 0.6);
  }
  70% {
    box-shadow: 0 0 0 8px rgba(166, 227, 161, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(166, 227, 161, 0);
  }
`;

export const LiveDot = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.green};
  margin-right: 8px;
  animation: ${pulse} 2s infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const LiveLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: ${(props) => props.theme.colors.green};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.teal};
    text-decoration: underline;
  }
`;

export const NotFoundText = styled.div`
  color: ${(props) => props.theme.colors.red};
`;

export const BackLink = styled(Link)`
  color: ${(props) => props.theme.colors.mauve};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.lavender};
    text-decoration: underline;
  }
`;
