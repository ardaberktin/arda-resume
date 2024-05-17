import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import Experiences from "./components/pages/Experiences";
import Projects from "./components/pages/Projects";
import AboutMe from "./components/pages/AboutMe";
import Footer from "./components/Footer";

//MainApp
function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  //const location = useLocation();

  useEffect(() => {
    // const handleBeforeUnload = (event) => {
    //   if (performance.getEntriesByType("navigation")[0].type === "reload") {
    //     if (
    //       location.pathname !== "/arda-resume/" ||
    //       location.pathname.length !== 13
    //     ) {
    //       console.log(location.pathname + " pathname");
    //       console.log(location.pathname.length + " pathname length");
    //       event.preventDefault();
    //       // Modern browsers show a generic message and ignore the custom text
    //       event.returnValue =
    //         "Refreshing the page will cause an error due to github pages limitations.";
    //     }
    //   }
    // };

    //window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      // window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/arda-resume/" element={<Home />} />
        <Route path="/arda-resume/experiences" element={<Experiences />} />
        <Route path="/arda-resume/projects" element={<Projects />} />
        <Route path="/arda-resume/about-me" element={<AboutMe />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
