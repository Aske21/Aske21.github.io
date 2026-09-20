import React from "react";
import Greetings from "../../components/greetings";
import Interests from "../../components/interests";
import Blog from "../../components/blog";
import Contact from "../../components/contact";

const Home: React.FC = () => {
  return (
    <>
      <Greetings />
      <Interests />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;
