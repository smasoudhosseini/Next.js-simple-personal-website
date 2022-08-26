import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import About from "./About";
import Skills from "./Skills";
import Sidebar from "./Sidebar";
import PublicationAward from "./PublicationAward";

const Home = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Sidebar />

        <About />

        <Education />

        <Experience />

        <Skills />

        <PublicationAward />
      </div>
    </>
  );
};
export default Home;
