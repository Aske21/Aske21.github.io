import styled from "styled-components";

export const AppContainer = styled.div`
  display: block;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.base};
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 48px 24px;
  margin: 0;
  text-align: left;
  
  @media (min-width: 848px) {
    padding-left: 48px;
    padding-right: 24px;
  }
`;
