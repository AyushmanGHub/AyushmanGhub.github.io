/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Ayushman Anupam",
  title01: "Data Scientist",
  title02: "AI Systems & Qantitative Modeling",
  title03: "LLMs, Time Series & MLOps",
  email: "ayushmantutu@gmail.com",
  gitHub: "AyushmanGHub",
  linkedIn: "ayushman-anupam",
  project: "https://ayushmanportfolio.streamlit.app/",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title01={siteProps.title01} title02={siteProps.title02} title03={siteProps.title03} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
