import styled from "styled-components";

export const InterestsList = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export const InterestsHeading = styled.h3`
  background-color: ${(props) => props.theme.colors.mauve};
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

export const InterestItem = styled.div`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.body};
  line-height: 1.8;
  font-size: 1em;

  @media (max-width: 768px) {
    line-height: 1.7;
  }
`;
