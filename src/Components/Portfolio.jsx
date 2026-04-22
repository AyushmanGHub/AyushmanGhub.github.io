/**
 * Portfolio component
 */

import React from "react";

const projectList = [
  {
    title: "LectureAI – Agentic AI Learning System",
    description:
      "Built an advanced Agentic AI system using LangGraph and RAG pipelines to transform lecture videos into interactive learning experiences with chatbot, notes, and mind maps.",
    url: "https://github.com/AyushmanGHub/LectureAI-Agentic-AI_freamework",
  },
  {
    title: "Z-Score Alpha – Statistical Arbitrage Strategy",
    description:
      "Developing a quantitative trading strategy using Z-score signals to identify mean-reversion opportunities and backtest performance on financial time series data.",
    url: "https://github.com/AyushmanGHub/Z-Score_Alpha-Statistical_Arbitrage_Strategy",
  },
  {
    title: "Minimum Variance Portfolio Optimization",
    description:
      "Implemented a portfolio optimization framework using covariance estimation and mean-variance optimization to minimize risk and improve allocation strategies.",
    url: "https://github.com/AyushmanGHub/Minimum_Variance_Portfolio_Optimization",
  },
  {
    title: "Applied Machine Learning System (MLOps Pipeline)",
    description:
      "Built an end-to-end ML system including model training, DVC versioning, MLflow tracking, Flask deployment, and Docker containerization.",
    url: "https://github.com/AyushmanGHub/Applied_Machine_Learning",
  },
  {
    title: "StockSeer – Market Prediction System",
    description:
      "Developed an automated pipeline for stock market prediction with incremental learning, data updates, and interactive visualizations for trend analysis.",
    url: "https://github.com/AyushmanGHub/-StockSeer-See-market-s-next-move",
  },
  {
    title: "Bayesian Corporate Rating Prediction (MCMC)",
    description:
      "Built a probabilistic model using Bayesian inference and MCMC techniques to predict corporate credit ratings with uncertainty quantification.",
    url: "https://github.com/AyushmanGHub/Synthetic-Data-Generation-and-Prediction-for-Corporate-rating-using-Bayesian-and-MCMC-techniques",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>My Latest Projects</h2>

      <div
        className="container"
        style={{
          paddingTop: "3rem",
          paddingLeft: "5rem",   // 👈 add this
          paddingRight: "5rem",  // 👈 add this
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // 🔥 3 columns → 2 rows × 3 cols
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