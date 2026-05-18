/**
 * Portfolio component
 */

import React from "react";

const projectList = [
  {
    title: "LectureAI - Personal Lecture Assistant",
    description:
      "Built an advanced Agentic AI system using LangGraph and RAG pipelines to transform lecture videos into interactive learning experiences with chatbot, notes, and mind maps.",
    url: "https://github.com/AyushmanGHub/LectureAI_-_Personal_Lecture_Assistant",
  },
  {
    title: "Z-Score Alpha - Statistical Arbitrage Strategy",
    description:
      "Quantitative trading strategy using Z-score signals to identify mean-reversion opportunities and backtest performance on financial time series data.",
    url: "https://github.com/AyushmanGHub/Z-Score_Alpha-Statistical_Arbitrage_Strategy",
  },
  {
    title: "Minimum Variance Portfolio Optimization",
    description:
      "Portfolio optimization framework using covariance estimation and mean-variance optimization to minimize risk and improve allocation strategies.",
    url: "https://github.com/AyushmanGHub/Minimum_Variance_Portfolio_Optimization",
  },
  {
    title: "SpectroCNN: Audio Classification with CNN",
    description:
      "Deep Learning project for audio classification using CNNs on spectrogram representations, by processing audio into Mel spectrograms to learns patterns.",
    url: "https://github.com/AyushmanGHub/SpectroCNN_-_Audio_Classification_with_CNN",
  },
  {
    title: "CreditRisk: Predicting Borrower Reliability",
    description:
      "Machine Learning project that predicts whether a person may fail to repay credit card dues based on their profile and past behavior.",
    url: "https://github.com/AyushmanGHub/CreditRisk-Predicting-Borrower-Reliability",
  },
  {
    title: "Bayesian Corporate Rating Prediction (MCMC)",
    description:
      "Probabilistic model using Bayesian inference and MCMC techniques to predict corporate credit ratings with uncertainty quantification.",
    url: "https://github.com/AyushmanGHub/Synthetic-Data-Generation-and-Prediction-for-Corporate-rating-using-Bayesian-and-MCMC-techniques",
  },
  {
    title: "Applied Machine Learning (AML) - Full System Design",
    description:
      "Applied ML project covering SMS spam classification, experiment tracking with DVC & MLflow, Flask model, Docker and transfer learning.",
    url: "https://github.com/AyushmanGHub/Applied_Machine_Learning",
  },
  {
    title: "Portfolio Website with Agentic AI Assistant",
    description:
      "Interactive Streamlit portfolio website with an Agentic AI assistant 'Resagent' for real-time conversational interaction and intelligent portfolio exploration.",
    url: "https://github.com/AyushmanGHub/APortfolio",
  },
  {
    title: "Fiedler's Spectral Graph Partitioning",
    description:
      "Research-focused project exploring Fiedler's Theory of Spectral Graph Partitioning using Fiedler value and vectors with proofs, implementations, and graph analysis applications.",
    url: "https://github.com/AyushmanGHub/Fiedlers-Spectral-Graph-Partitioning-Paper",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>My Key Projects</h2>

      <div
        className="container"
        style={{
          paddingTop: "3rem",
          paddingLeft: "5rem",
          paddingRight: "5rem",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2rem",
        }}
      >
        {projectList.map((project) => (
          <div className="box" key={project.title}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <h3>{project.title}</h3>
            </a>
            <p className="small">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;