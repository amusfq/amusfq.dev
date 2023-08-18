import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "../Hero";
import About from "../About";
import Experiences from "../Experiences";
import Work from "../Work";
import OtherProject from "../OtherProject";
import Contact from "../Contact";
import AOS from "aos";
import "aos/dist/aos.css";

const Content = () => {
  useEffect(() => {
    AOS.init();
    return () => {};
  }, []);

  return (
    <div className="px-6 md:px-8 xl:px-12">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Experiences />
                <Work />
                <OtherProject />
                <Contact />
              </>
            }
          />
          <Route path="/archive" element={<h1>ASD</h1>} />
        </Routes>
      </Router>
    </div>
  );
};

export default Content;
