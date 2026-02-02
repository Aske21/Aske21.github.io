import { styled, keyframes } from "styled-components";

export const blinkCursor = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

export const StyledDiv = styled.div`
  background-color: transparent;
  color: ${(props) => props.theme.colors.text};
  padding: 0;
  margin: 0;
  font-family: ${(props) => props.theme.fonts.body};
  white-space: pre-wrap;
  line-height: 1.8;
  
  &::before {
    content: "aske21@github ➜ ~ ";
    color: ${(props) => props.theme.colors.mauve};
    margin-right: 8px;
    display: inline-block;
  }
  
  &:after {
    content: "█";
    display: inline-block;
    vertical-align: bottom;
    margin-left: 2px;
    color: ${(props) => props.theme.colors.mauve};
    animation: ${blinkCursor} 1s step-end infinite;
  }
`;
