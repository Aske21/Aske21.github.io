import { styled, keyframes } from "styled-components";

export const blinkCursor = keyframes`
  0%, 100% {
    border-right: 2px solid transparent;
  }
  50% {
    border-right: 2px solid white;
  }
`;

export const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.text};
  padding: 20px;
  margin: 20px;
  margin-top: 0px;
  border-radius: 5px;
  overflow: hidden;
  &:after {
    content: "|";
    display: inline-block;
    vertical-align: bottom;
    margin-left: 5px;
    animation: ${blinkCursor} 1s step-end infinite;
  }
`;
