import styled from "styled-components";
import { Link } from "react-router-dom";

export const PostList = styled.div`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.body};
`;

export const PostEntry = styled.div`
  margin-bottom: 24px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const PostTitle = styled(Link)`
  color: ${(props) => props.theme.colors.blue};
  text-decoration: none;
  font-size: 1.05em;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.lavender};
    text-decoration: underline;
  }
`;

export const PostMeta = styled.div`
  color: ${(props) => props.theme.colors.subtext0};
  font-size: 14px;
  margin-top: 4px;
`;

export const PostExcerpt = styled.div`
  color: ${(props) => props.theme.colors.subtext1};
  margin-top: 4px;
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
