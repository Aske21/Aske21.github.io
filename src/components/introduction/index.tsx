import React from "react";
import {
  IntroductionContent,
  IntroductionWrapper,
  Picture,
  IntroductionHeading,
  Subheading,
  Description,
} from "./stlyed";
import profile from "../../assets/profile.jpg";

const Introduction: React.FC = () => {
  return (
    <IntroductionWrapper>
      <IntroductionContent>
        <div>
          <Picture src={profile} alt="You" />
        </div>
        <Description>
          <IntroductionHeading>Asim Veledarevic</IntroductionHeading>
          <Subheading>
            <strong>Sculpting Digital Experiences</strong> <br /> Developer |
            Designer
          </Subheading>
        </Description>
      </IntroductionContent>
    </IntroductionWrapper>
  );
};

export default Introduction;
