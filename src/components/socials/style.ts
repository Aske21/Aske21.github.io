import styled from "styled-components";

export const SocialLink = styled.a`
  color: ${(props) => props.theme.colors.blue};
  text-decoration: none;
  font-family: ${(props) => props.theme.fonts.body};
  transition: color 0.3s ease;
  font-size: 16px;
  display: inline;

  &:hover {
    color: ${(props) => props.theme.colors.lavender};
    text-decoration: underline;
  }
`;
