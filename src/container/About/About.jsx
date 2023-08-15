import React from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";

import "./About.scss";

const abouts = [
  {
    title: "Web Developer",
    description:
      "I am budding web developer with keen interest in mastering both frontend and backend.",
    imgUrl: images.about01,
  },
  {
    title: "Software Engineer",
    description:
      "I am an enthusiastic problem solver on the path to becoming a skilled software developer.",
    imgUrl: images.about02,
  },
];

function About() {
  return (
    <>
      <h2 className="head-text">
        Crafing elegant <span>solutions</span>
        <br />
        through <span>code</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default About;
