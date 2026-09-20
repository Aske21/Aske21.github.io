import styled from "styled-components";
import { Link } from "react-router-dom";

export const PostMeta = styled.div`
  color: ${(props) => props.theme.colors.subtext0};
  font-size: 14px;
  margin-bottom: 16px;
`;

export const MarkdownBody = styled.div`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.body};
  line-height: 1.8;

  h1,
  h2,
  h3 {
    color: ${(props) => props.theme.colors.lavender};
    margin: 24px 0 12px;
  }

  h1:first-child,
  h2:first-child,
  h3:first-child {
    margin-top: 0;
  }

  p {
    margin-bottom: 16px;
  }

  a {
    color: ${(props) => props.theme.colors.blue};

    &:hover {
      color: ${(props) => props.theme.colors.lavender};
    }
  }

  code {
    background-color: ${(props) => props.theme.colors.light};
    color: ${(props) => props.theme.colors.peach};
    padding: 2px 6px;
    border-radius: ${(props) => props.theme.borderRadius.sm};
    font-size: 0.9em;
  }

  pre {
    background-color: ${(props) => props.theme.colors.mantle};
    border: 1px solid ${(props) => props.theme.colors.light};
    border-radius: ${(props) => props.theme.borderRadius.md};
    padding: 16px;
    overflow-x: auto;
    margin-bottom: 16px;

    code {
      background: none;
      padding: 0;
    }
  }

  ul,
  ol {
    margin: 0 0 16px 24px;
  }

  blockquote {
    border-left: 3px solid ${(props) => props.theme.colors.mauve};
    color: ${(props) => props.theme.colors.subtext1};
    margin: 0 0 16px;
    padding-left: 16px;
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
