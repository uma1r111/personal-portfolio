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

import notebook1 from "../assets/Sarima & LSTM.pdf"

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  // Define project data
  const projects = [
    {
      title: "Inflation Forecasting Kaggle",
      description:
        "This is the description for Project 1. This is the description for Project 1. This is the description for Project 1.This is the description for Project 1.This is the description for Project 1.This is the description for Project 1.This is the description for Project 1.This is the description for Project 1.This is the description for Project 1.This is the description for Project 1.This is the description for Project 1.This is the description for Project 1.",
      image: project1Img,
      link: "https://github.com/uma1r111/inflation-forecasting-kaggle",
      extraLink: notebook1,
      extraLabel: "View Notebook",
    },
    {
      title: "Project 2",
      description: "This is the description for Project 2.",
      image: project2Img,
      link: "https://github.com/user/project2",
    },
    {
      title: "Project 3",
      description: "This is the description for Project 3.",
      image: project3Img,
      link: "https://github.com/user/project3",
    },
    {
      title: "Project 4",
      description: "This is the description for Project 4.",
      image: project4Img,
      link: "https://github.com/user/project4",
    },
    {
      title: "Project 5",
      description: "This is the description for Project 5.",
      image: project5Img,
      link: "https://github.com/user/project5",
    },
    {
      title: "Project 6",
      description: "This is the description for Project 6.",
      image: project6Img,
      link: "https://github.com/user/project6",
    },
  ];

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 pt-24 pb-12">
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
        <div className="mt-12 flex justify-between items-stretch flex-wrap gap-8">
          {/* Render a Card for each project */}
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              extraLink={project.extraLink} // Pass extraLink to Card
              extraLabel={project.extraLabel} // Pass extraLabel to Card
            />
          ))}
        </div>
        <a
          href="https://github.com/user"
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
