import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const MobileNavigation = styled.div``;

export const Wrapper = styled.div`
  width: 100%;
  margin-inline-start: auto;
  margin-inline-end: auto;
  max-width: 800px;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
  padding-top: 24px;
  gap: 24px;
  overflow-y: auto;
  max-height: calc(100vh - 60px);

  scrollbar-width: thin;
  scrollbar-color: #f8bbd0 #2c303a;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #f8bbd0;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: #2c303a;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
