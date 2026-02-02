import styled, { keyframes } from "styled-components";

const blinkCursor = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

export const TerminalBlock = styled.div`
  margin-bottom: 32px;
  font-family: ${(props) => props.theme.fonts.body};
  text-align: left;
  font-size: 1em;

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const CommandLine = styled.div`
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 12px;
  font-family: ${(props) => props.theme.fonts.body};
  text-align: left;
  font-size: 1em;
  
  span {
    color: ${(props) => props.theme.colors.mauve};
  }

  @media (max-width: 768px) {
    margin-bottom: 8px;
  }
`;

export const Prompt = styled.span`
  color: ${(props) => props.theme.colors.green};
`;

interface CommandOutputProps {
  showCursor?: boolean;
}

export const CommandOutput = styled.div<CommandOutputProps>`
  color: ${(props) => props.theme.colors.text};
  line-height: 1.8;
  white-space: pre-wrap;
  text-align: left;
  font-size: 1em;
  
  @media (max-width: 768px) {
    line-height: 1.7;
  }
  
  ${(props) =>
    props.showCursor &&
    `
    &::after {
      content: "█";
      display: inline-block;
      margin-left: 2px;
      color: ${props.theme.colors.mauve};
      animation: ${blinkCursor} 1s step-end infinite;
    }
  `}
`;
