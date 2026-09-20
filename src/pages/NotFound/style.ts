import styled from "styled-components";
import { Link } from "react-router-dom";

export const ErrorText = styled.div`
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
