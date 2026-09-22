import React from "react";
import Greetings from "../../components/greetings";
import Interests from "../../components/interests";
import Portfolio from "../../components/portfolio";
import Blog from "../../components/blog";
import Contact from "../../components/contact";
import { usePageMeta } from "../../utils/seo/usePageMeta";

const Home: React.FC = () => {
  usePageMeta({
    title: "Asim Veledarevic — Frontend & React Developer",
    description:
      "Portfolio of Asim Veledarevic (Aske21), a frontend web developer specializing in React, Next.js, and Node.js. Explore skills, featured projects, and blog posts.",
    path: "/",
  });

  return (
    <>
      <Greetings />
      <Interests />
      <Portfolio />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;
