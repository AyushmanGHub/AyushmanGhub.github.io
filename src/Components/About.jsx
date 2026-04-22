import React from "react";

/**
 * Combined description (ALL text first)
 */
const description = `
I'm Ayushman Anupam, a Data Science professional specializing in AI systems and quantitative modeling. I enjoy building intelligent, data-driven solutions that combine machine learning, statistics, and real-world applications—especially in finance and automation.

I am passionate about designing systems that transform complex data into actionable insights. My work focuses on the intersection of AI, quantitative finance, and scalable ML systems. I enjoy solving challenging problems, building end-to-end solutions, and continuously exploring new ideas in machine learning and intelligent automation.
`;

/**
 * Skills
 */
const skillsList = [
  "Machine Learning & Deep Learning",
  "Time Series & Statistical Modeling",
  "Quantitative Finance",
  "LLMs, RAG & Agentic AI",
  "Python, SQL & Data Analysis",
  "MLOps & Model Deployment",
];

const About = () => {
  return (
    <section className="padding" id="about">
      <div
        style={{
          backgroundColor: "white",
          maxWidth: "900px",
          padding: "3rem 2rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>

        {/* 🔥 All text first */}
        <p className="large" style={{ lineHeight: "1.8" }}>
          {description}
        </p>

        <hr />

        {/* 🔥 Skills at bottom */}
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.2rem",
            margin: "2rem auto",
            maxWidth: "800px",
            gap: "2rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;