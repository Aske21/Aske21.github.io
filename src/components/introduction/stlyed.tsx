import styled from "styled-components";
import { FlexColumn, FlexRow } from "../../utils/theme/wrappers";

export const IntroductionWrapper = styled(FlexColumn)`
  margin: 20px;
  margin-bottom: 4rem;
`;

export const Description = styled.div`
  margin-left: 1rem;
`;

export const IntroductionHeading = styled.h2`
  line-height: 1.2;
  font-size: 36px;
`;

export const Subheading = styled.p``;

export const IntroductionParagraph = styled.p``;

export const Picture = styled.img`
  border-radius: 50%;
  width: 96%;
  height: 100px;
  @media (max-width: 768px) {
    width: 100%;
    height: 185px;
  }
`;

export const IntroductionContent = styled(FlexRow)`
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;
