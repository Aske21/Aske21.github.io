import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const PortfolioHeading = styled.h3`
  background-color: ${(props) => props.theme.colors.peach};
  color: ${(props) => props.theme.colors.base};
  padding: 6px 12px;
  display: inline-block;
  margin-bottom: 16px;
  border-radius: 4px;
  font-size: 1.1em;
  font-weight: normal;
  font-family: ${(props) => props.theme.fonts.body};

  @media (max-width: 768px) {
    font-size: 1em;
    padding: 4px 8px;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    font-size: 0.95em;
  }
`;

export const RepoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
  margin-bottom: 16px;
`;

export const RepoCard = styled(Link)`
  display: block;
  border: 1px solid ${(props) => props.theme.colors.light};
  border-radius: ${(props) => props.theme.borderRadius.md};
  padding: 12px 14px;
  background-color: ${(props) => props.theme.colors.mantle};
  opacity: 0;
  animation: ${fadeInUp} 0.5s ease forwards;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${(props) => props.theme.colors.mauve};
    box-shadow: 0 8px 20px rgba(203, 166, 247, 0.15);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;

export const RepoName = styled.div`
  color: ${(props) => props.theme.colors.blue};
  font-size: 1.05em;
  margin-bottom: 8px;
  transition: color 0.25s ease;

  ${RepoCard}:hover & {
    color: ${(props) => props.theme.colors.lavender};
  }
`;

export const RepoMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 0.8em;
  color: ${(props) => props.theme.colors.subtext0};

  span {
    display: inline-flex;
    align-items: center;
  }
`;

export const LanguageDot = styled.span<{ $color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => props.$color};
  margin-right: 6px;
`;

export const ViewAllLink = styled.a`
  color: ${(props) => props.theme.colors.mauve};
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.lavender};
    text-decoration: underline;
  }
`;
