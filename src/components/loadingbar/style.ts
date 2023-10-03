import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 99%;
  }
`;

export const Container = styled.div`
  width: 100%;
  background-color: #2c303a;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
`;

export const ProgressBar = styled.div`
  width: 0%;
  height: 20px;
  background: linear-gradient(
    -45deg,
    #ff95c3,
    #ffe3ec,
    #ff95c3,
    #ff95c3,
    #fff0f6
  );
  animation: ${loadingAnimation} 3s ease-in-out forwards;
`;

export const TextMarker = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
`;
