import React from "react";
import { PortfolioWrapper, PortofolioHeading } from "./style";
import LoadingBar from "../loadingbar";

const Portofolio: React.FC = () => {
  return (
    <PortfolioWrapper>
      <PortofolioHeading>Portfolio</PortofolioHeading>
      Coming soon...
      <LoadingBar />
    </PortfolioWrapper>
  );
};

export default Portofolio;
