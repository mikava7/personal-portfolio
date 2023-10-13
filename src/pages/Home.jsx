import React from "react";
import { Element } from "react-scroll";
import Hero from "../components/Hero";
import Projects from "./Projects/Projects";
import Contact from "./Contact";
const Home = () => {
  return (
    <>
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </>
  );
};

export default Home;
