import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import marketingImage from "../assets/pixel-pulse.jpg";
import classNames from "classnames";

const Services = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section
      id="services"
      className={classNames("pb-20", {
        "bg-gray-100": darkMode,
        "bg-black": !darkMode,
      })}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Section Title */}
        <p
          className={classNames(
            "text-lg text-center",
            darkMode ? "text-gray-600" : "text-gray-400"
          )}
        >
          Discover My Startup Journey
        </p>
        <h1
          className={classNames(
            "text-5xl font-bold text-center mt-4",
            darkMode ? "text-gray-900" : "text-white"
          )}
        >
          Pixel Pulse
        </h1>

        {/* Content */}
        <div className="md:flex md:items-center md:gap-20 mt-12 flex-wrap">
          {/* Text Container */}
          <div className="p-6 bg-white rounded-2xl shadow-lg flex-1">
            <p className="text-base leading-7 text-justify text-gray-800">
              Pixel Pulse is a dynamic marketing agency I co-founded, dedicated
              to driving growth through innovative digital marketing strategies
              and data-driven analytics. We specialize in helping brands connect
              with their audience, build loyalty, and achieve measurable
              results. Our mission is to empower businesses to thrive in an
              ever-changing digital landscape.
            </p>
            <p className="text-base leading-7 text-justify text-gray-800 mt-4">
              We also work closely with small-scale and micro-businesses that
              need support to grow. Through our client Auralin Glow, we have
              collaborated with Khaadi twice on their "Kreate Your Mark"
              campaign, which focuses on empowering female entrepreneurs.
            </p>
            <div className="flex justify-center mt-6">
              <a
                href="https://www.instagram.com/pixelpulse.service/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition"
                aria-label="Visit Pixel Pulse on Instagram"
              >
                Visit Instagram
              </a>
            </div>
          </div>

          {/* Image Container */}
          {/* Image Container */}
          <div
            className="image-container p-2 rounded-2xl shadow-lg flex justify-center items-center flex-1 mt-5"
            style={{ backgroundColor: "#EA727B" }}
          >
            <img
              src={marketingImage}
              alt="Pixel Pulse Marketing"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
