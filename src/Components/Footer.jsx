/**
 * Footer component
 */

import React from "react";
import PropTypes from "prop-types";

import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
import linkedInIcon from "../images/socials/linkedin.svg";

const Footer = (props) => {
  const {
    email,
    gitHub,
    linkedIn,
    project,
    name,
    primaryColor,
  } = props;

  return (
    <div
      id="footer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        padding: "5rem 0 3rem",
        backgroundColor: primaryColor,
        width: "100vw",
        color: "white",
        textAlign: "center",
      }}
    >
      {/* 🔥 Project CTA */}
      {project && (
        <>
          <h3 style={{ marginBottom: "0.5rem" }}>
            🚀 Try My AI Portfolio App
          </h3>

          <a
            href={project}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "0.9rem 2rem",
              fontSize: "1rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            🌐 Open Live App
          </a>

          {/* 🔥 Description BELOW button */}
          <p
            style={{
              maxWidth: "600px",
              fontSize: "0.95rem",
              lineHeight: "1.6",
              marginTop: "0rem",
              opacity: "0.9",
            }}
          >
            My Streamlit-based portfolio application where you can
            explore my projects in detail and interact with a smart personal AI
            resume assistant called <b>“ResAgent”</b>.
          </p>
        </>
      )}

      {/* Social Icons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2.5rem",
          marginTop: "1rem",
        }}
      >
        {email && (
          <a href={`mailto:${email}`}>
            <img src={envelopeIcon} alt="email" className="socialIcon" />
          </a>
        )}

        {gitHub && (
          <a
            href={`https://github.com/${gitHub}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
          </a>
        )}

        {linkedIn && (
          <a
            href={`https://www.linkedin.com/in/${linkedIn}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" />
          </a>
        )}
      </div>

      {/* Bottom text */}
      <p className="small" style={{ marginTop: "1rem", color: "white" }}>
        Created by {name}
      </p>
    </div>
  );
};

Footer.defaultProps = {
  name: "",
};

Footer.propTypes = {
  email: PropTypes.string,
  gitHub: PropTypes.string,
  linkedIn: PropTypes.string,
  project: PropTypes.string,
  name: PropTypes.string.isRequired,
  primaryColor: PropTypes.string,
};

export default Footer;