import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, description, image, link, extraLink, extraLabel }) => {
  return (
<motion.div
  initial="hidden"
  whileInView="visible"
  variants={{
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }}
  className="w-full max-w-xs bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 my-4 mx-auto"
>
  <a href={link} target="_blank" rel="noopener noreferrer">
    <img
      className="rounded-t-lg w-full h-65 object-cover"
      src={image}
      alt={title}
    />
  </a>
  <div className="p-4">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
    </a>
    <p className="text-sm text-gray-700 dark:text-gray-400 mt-2 line-clamp-7">
      {description}
    </p>
    <div className="flex justify-center gap-2 mt-4">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center py-2 px-3 text-xs font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
      >
        View Project
      </a>
      {extraLink && (
        <a
          href={extraLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center py-2 px-3 text-xs font-medium text-white bg-green-500 rounded-lg hover:bg-green-600"
        >
          {extraLabel || "View Extra"}
        </a>
      )}
    </div>
  </div>
</motion.div>

  );
};

export default Card;

