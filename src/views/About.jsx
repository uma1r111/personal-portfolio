import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import classNames from "classnames";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="about" className={darkMode === true ? "bg-white" : "bg-gray-900"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <p
          className={classNames(
            "text-lg text-center",
            darkMode ? "text-gray-600" : "text-gray-400"
          )}
        >
          Get To Know More
        </p>
        <h1
          className={classNames(
            "text-5xl font-bold text-center mt-4",
            darkMode ? "text-black" : "text-white"
          )}
        >
          About Me
        </h1>
        <div>
          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              {/* Get To Know More  */}
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              I co-founded Pixel Pulse, driving growth through strategic digital
              marketing and data analytics. My work at The Citizens Foundation
              (TCF) and AI Datayard has honed my skills in managing large-scale
              programs and data-driven decision-making. Currently pursuing a
              diploma in AI/ML, I aim to leverage this expertise to enhance
              marketing strategies at my agency. Passionate about data, I am
              committed to continuous learning and adaptability, aspiring to
              become a full-stack AI/ML engineer.
            </p>
          </motion.div>
          <motion.div>
            <h4 className="mt-12 text-3xl font-bold text-500 text-center">
              Technologies and Tools
            </h4>
            {/* <h1
              className={classNames(
                "text-3xl font-bold text-center mt-5",
                darkMode ? "text-black" : "text-white"
              )}
            >
              Technologies and Tools
            </h1> */}
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            ></p>
          </motion.div>
          <motion.div className="flex flex-wrap mt-8 flex flex-wrap justify-between ">
            {techStack.map((el, index) => (
              <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                    },
                  },
                  hidden: { opacity: 1, y: 80 },
                }}
                className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
              >
                <img alt="" src={el.link} className="w-12" />
                <h4 className="text-md ml-4">{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
