import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";
import classNames from "classnames";

import project1Img from "../assets/project1.png";
import project2Img from "../assets/project2.png";
import project3Img from "../assets/project3.png";
import project4Img from "../assets/project4.png";
import project5Img from "../assets/project5.png";
import project6Img from "../assets/project6.png";

import notebook1 from "../assets/Sarima & LSTM.pdf";
import notebook2 from "../assets/Random Forest & Extra Tree.pdf";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  // Define project data
  const projects = [
    {
      title: "Inflation Forecasting Kaggle",
      description:
        "I participated in Pakistan's inflation prediction competition organized by the EGF Lab at IBA. Using economic insights and machine learning, I developed robust models like SARIMA and LSTM. The work included deep exploratory data analysis, time series visualizations, feature engineering (e.g., interest rate spread, banking activity index, Exchange Rate Differential), and model optimization with Optuna.",
      image: project1Img,
      link: "https://github.com/uma1r111/inflation-forecasting-kaggle",
      extraLink: notebook1,
      extraLabel: "View Notebook",
    },
    {
      title: "House Price Forecasting Kaggle",
      description:
        "I participated in a machine learning competition to predict house prices. I fixed errors in features, filled missing data using patterns in addresses, and tackled two key tasks: determining macroeconomic influences and location-specific factors. By scaling prices and employing cross-validation, I improved model accuracy. Residual analysis helped refine models and correct data, securing 5th place for my batch.",
      image: project2Img,
      link: "https://github.com/uma1r111/House-Price-Forecasting-Kaggle",
      extraLink: notebook2,
      extraLabel: "View Notebook",
    },
    {
      title: "Student-Lawyer Library",
      description:
        "A full-stack database project using MySQL instead of MERN, featuring a student-lawyer model. Students can request lawyers to add cases, bookmark them, and search by category. Lawyers receive notifications, manage cases, and upload updates. Implemented JWT authentication for secure access for both students and lawyers. Implemented Super-Admin role for overall control of the student-lawyer interaction.",
      image: project3Img,
      link: "https://github.com/uma1r111/student-lawyer-library",
      extraLink: "https://demo.project2.com",
      extraLabel: "View Demo",
    },
    {
      title: "Yes-Only Button",
      description:
        "A fun and interactive-over the weekend-JavaScript project with a playful red theme. The No button always dodges when hovered over, leaving Yes as the only clickable option. It allows customization of themes to suit different occasions, and users can add cute stickers for a personalized touch. This creative and light-hearted project is perfect for apologies, playful invitations, or even fun surprises.",
      image: project4Img,
      link: "https://github.com/uma1r111/yes-only-button",
      extraLink: "https://yes-only-button.netlify.app/",
      extraLabel: "View Demo",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A responsive JavaScript portfolio showcasing my skills, tools, and technologies, along with featured projects. It includes a dedicated marketing section for my startup, Pixel Pulse, highlighting my expertise in marketing and innovation. Fully optimized for mobile devices, the portfolio also features a dark mode option, allowing the website to adapt seamlessly to user preferences for a modern and accessible browsing experience. ",
      image: project5Img,
      link: "https://github.com/uma1r111/personal-portfolio",
      extraLink: "https://shaikh-m-umair-portfolio.netlify.app/",
      extraLabel: "View Demo",
    },
    {
      title: "Flappy Bird (NEAT Neural Network)",
      description:
        "A Flappy Bird game recreated to dive deeper into Machine Learning after completing my coursework. Through this project, I explored automation by implementing Genetic Algorithm - NeuroEvolution of Augmenting Topologies (NEAT) which creates artificial neural networks (ANNs) that uses evolution-like processes to generate networks. This enhanced my understanding of how AI adapts and optimizes decision-making in real-time",
      image: project6Img,
      link: "https://github.com/uma1r111/flappy-bird-AI",
      extraLink: "https://demo.project2.com",
      extraLabel: "View Demo",
    },
  ];

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <p
          className={classNames(
            "text-lg text-center",
            darkMode ? "text-gray-600" : "text-gray-400"
          )}
        >
          Browse My Recent
        </p>
        <h1
          className={classNames(
            "text-5xl font-bold text-center mt-4",
            darkMode ? "text-black" : "text-white"
          )}
        >
          Projects
        </h1>
        {/* Use Grid for layout */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {/* Render a Card for each project */}
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              extraLink={project.extraLink}
              extraLabel={project.extraLabel}
            />
          ))}
        </div>
        <a
          href="https://github.com/uma1r111/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-32 flex items-center py-4 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto mt-12"
        >
          Show More
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Projects;
