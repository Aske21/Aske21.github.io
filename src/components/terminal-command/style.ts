import styled, { keyframes } from "styled-components";

const blinkCursor = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

export const TerminalBlock = styled.div<{ $visible: boolean }>`
  margin-bottom: 32px;
  font-family: ${(props) => props.theme.fonts.body};
  text-align: left;
  font-size: 1em;
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  transform: translateY(${(props) => (props.$visible ? "0" : "18px")});
  transition: opacity 0.6s ease, transform 0.6s ease;

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
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

  /* Whichever terminal block ends up last on the page always gets a live cursor
     right after its command — mirrors a shell prompt waiting for input. */
  ${TerminalBlock}:last-child > &::after {
    content: "█";
    display: inline-block;
    margin-left: 2px;
    color: ${(props) => props.theme.colors.mauve};
    animation: ${blinkCursor} 1s step-end infinite;
  }
`;

export const Prompt = styled.span`
  color: ${(props) => props.theme.colors.green};
`;

export const CommandOutput = styled.div`
  color: ${(props) => props.theme.colors.text};
  line-height: 1.8;
  white-space: pre-wrap;
  text-align: left;
  font-size: 1em;

  @media (max-width: 768px) {
    line-height: 1.7;
  }
`;
