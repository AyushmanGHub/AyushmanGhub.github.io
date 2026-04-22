/**
 * Home component
 */

import React from "react";
import PropTypes from "prop-types";
import image from "../images/Github.png";

const Home = ({ name, title01, title02, title03 }) => {
  return (
    <section
      id="home"
      className="min-height"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "4rem 2rem",        // 👈 reduced side padding
        maxWidth: "1200px",          // 👈 constrain width
        margin: "0 auto",            // 👈 center everything
        gap: "2rem",
      }}
    >
      {/* LEFT SIDE */}
      <div style={{ maxWidth: "45%" }}>
        <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>{name}</h1>

        <h3 style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>
          {title01}
        </h3>
        <h3 style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>
          {title02}
        </h3>
        <h3 style={{ fontSize: "1.75rem", marginBottom: "2rem" }}>
          {title03}
        </h3>

        {/* 🔥 Resume Button */}
        <a
          href="https://drive.google.com/file/d/1nNMGpTRDHasUIm5fzZXCNol3qpapIwon/view"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "1rem 2rem",
            fontSize: "1.1rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          📄 View My Resume
        </a>
      </div>

      {/* RIGHT SIDE IMAGE
      <div style={{ maxWidth: "40%", marginRight: "3rem"}}>
        <img
          src={image}
          alt="portfolio visual"
          style={{ width: "100%", borderRadius: "10px" }}
        />
      </div> */}
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title01: PropTypes.string.isRequired,
  title02: PropTypes.string.isRequired,
  title03: PropTypes.string.isRequired,

};

export default Home;